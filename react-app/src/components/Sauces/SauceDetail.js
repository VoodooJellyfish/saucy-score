import { useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from "../../context/Modal";
import { thunk_goDeleteSauce, thunk_editSauce } from '../../store/sauce';
import EditSauceFormModal from './EditSauceModal';
import Review from '../Reviews/Review';
import CreateReviewFormModal from '../Reviews/ReviewFormModal';
import SauceReviews from '../Reviews/SauceReviews';
import { thunk_getSauceReviews } from '../../store/review';
import "./Sauce.css"


export default function Sauce () {
    const history = useHistory()
    const { sauceId } = useParams();
    const dispatch = useDispatch()

    const saucesSlice = useSelector(state => state.sauces)
    const sauces = Object.values(saucesSlice)
    const sessionUser = useSelector(state => state.session.user);
    const session = useSelector(state => state?.session)
    const userId = sessionUser?.id
    const authenticated = sessionUser !== null

    const [hasReviewed, setHasReviewed] = useState(false)

    const sauce = sauces?.find(sauce => sauce?.id === +sauceId)
    const reviews = sauce?.reviews

    const previousReview = reviews?.find(review => review?.user_id === +userId)
    console.log("previous Review", previousReview)

    const isLogged = session?.user ? true : false
    const isUser = session?.user ? session?.user.id === sauce?.user_id : false
    const isSauceOwner = userId === sauce?.user_id ? true : false
    // const hasReviewed = previousReview ? true : false

    console.log("TERNARY STUFF" , "Logged in :", isLogged, "isUser: ", isUser,
    "isOwner:", isSauceOwner, "has Reviewed:", hasReviewed)


    useEffect (() => {

    }, [authenticated, hasReviewed])


    useEffect(() => {

        return dispatch(thunk_getSauceReviews(sauce?.id))

    },[sauce, dispatch])

    


    return (
        <div className="detail-page">
            <div className="sauce-detail-card">
                <div className="sauce-img-container">
                    <img className= "detail-image" src={sauce?.image_url} alt={sauce?.name}></img>
                </div>
                <div className='text-container'>
                    <div>{sauce?.name}</div>
                    <div>{sauce?.description}</div>
                    <div id="detail-username">
                        Submitted By: {sauce?.username} on {sauce?.created_at}
                    </div>
                    <div>
                        <EditSauceFormModal sauce={sauce} isSauceOwner={isSauceOwner}/>
                    </div>
                </div>
                
            </div>
            <div className='sauce-reviews'>
                <div> 
                    <CreateReviewFormModal sauce={sauce} hasReviewed={hasReviewed} setHasReviewed={setHasReviewed}/>
                </div>
                <SauceReviews sauce={sauce} hasReviewed={hasReviewed} setHasReviewed={setHasReviewed}/>
            </div>
        </div>
    )

}