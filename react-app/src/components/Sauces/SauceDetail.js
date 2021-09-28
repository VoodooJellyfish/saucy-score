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

export function findScore (reviews) {
        let num_of_reviews = reviews?.length
        let sum_of_score = 0

        for (let i=0; i < reviews?.length; i++) {
            let review = reviews[i]
            let score = +review?.rating
            sum_of_score += score
        }
        return (sum_of_score/num_of_reviews)
    }

    
    export function findSpice (reviews) {
        let num_of_reviews = reviews?.length
        let sum_of_score = 0

        for (let i=0; i < reviews?.length; i++) {
            let review = reviews[i]
            let score = +review?.spice_level
            sum_of_score += score
        }
        return (sum_of_score/num_of_reviews)
    }


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
    const sauce = sauces?.find(sauce => sauce?.id === +sauceId)
    const reviews = sauce?.reviews

    const previousReview = reviews?.find( review => review?.user_id === userId)

    const isReview = previousReview ? true:false
    console.log("PREVIOUSREVIEW", previousReview)

    const [hasReviewed, setHasReviewed] = useState(isReview)
    const [score, setScore] = useState(0)
    const [spice, setSpice] = useState(0)

    



    const isSauceOwner = userId === sauce?.user_id ? true : false




    useEffect (() => {
        setScore(findScore(reviews))
        setSpice(findSpice(reviews))
        setHasReviewed(isReview)
    }, [reviews, isReview])


    useEffect(() => {

        return dispatch(thunk_getSauceReviews(sauce?.id))

    },[sauce, dispatch])



    console.log("SCORE", findScore(reviews))
    console.log("SPICE", findSpice(reviews))

    
    let scoreArr = []
    for(let i=0; i < findScore(reviews); i++) {
        scoreArr.push('fas fa-star')
    }

    let spiceArr = []
    for(let i=0; i < findSpice(reviews); i++) {
        spiceArr.push('fas fa-pepper-hot')
    }
    

    


    return (
        <div className="detail-page">
            <div className="sauce-detail-card">
                <div className="sauce-img-container">
                    <img className= "detail-image" src={sauce?.image_url} alt={sauce?.name}></img>
                </div>
                <div className='text-container'>
                    <div id="sauce-name">{sauce?.name}</div>
                    <div id="icon-holder">
                        <div>
                            {scoreArr.map((el, i) => {
                            return <span key={i}><i className={el}></i></span>
                            })}
                        </div>
                        <div></div>
                        <div>
                            {spiceArr.map((el, i) => {
                            return <span key={i}><i className={el}></i></span>
                            })}
                        </div>
                    </div>
                    <div id="description">{sauce?.description}</div>
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
                    <CreateReviewFormModal sauce={sauce} hasReviewed={hasReviewed} setHasReviewed={setHasReviewed}
                    setScore={setScore} setSpice={setSpice} previousReview={previousReview}/>
                </div>
                <SauceReviews sauce={sauce} hasReviewed={hasReviewed} setHasReviewed={setHasReviewed}/>
            </div>
        </div>
    )

}