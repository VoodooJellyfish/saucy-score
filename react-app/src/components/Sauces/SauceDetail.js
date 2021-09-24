import { useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from "../../context/Modal";
import { thunk_goDeleteSauce, thunk_editSauce } from '../../store/sauce';
import EditSauceFormModal from './EditSauceModal';
import Review from '../Reviews/Review';
import CreateReviewFormModal from '../Reviews/ReviewFormModal';


export default function Sauce () {
    const history = useHistory()
    const { sauceId } = useParams();
    const dispatch = useDispatch()

    const saucesSlice = useSelector(state => state.sauces)
    const sauces = Object.values(saucesSlice)
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser?.id

    const sauce = sauces?.find(sauce => sauce?.id === +sauceId)
    const reviews = sauce?.reviews

    const session = useSelector(state => state?.session)
    const isLogged = session?.user ? true : false
    const isUser = session?.user ? session?.user.id === sauce?.user_id : false

    const previousReview = reviews?.find(review => review?.user_id === +userId)


    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const deleteFunc = () => {
        dispatch(thunk_goDeleteSauce(sauceId));
        history.push('/')
    }
    const handleClickEdit = () => {
        setShowEditModal(true)
    }
    const handleClickDelete = () => {
        setShowDeleteModal(true)
    }

    const closeDeleteModal = () => {
        setShowDeleteModal(false)
    }
    const closeEditModal = () => {
        setShowEditModal(false)
    }

    


    return (
        <div>
            <img src={sauce?.image_url} alt={sauce?.name}></img>
            <div>
                <div>{sauce?.name}</div>
                <div>{sauce?.description}</div>
            </div>
            <EditSauceFormModal sauce={sauce}/>
            {!previousReview ?
                <div> 
                    <CreateReviewFormModal sauce={sauce}/>
                </div>
            : <></> }
            <div className='sauce-reviews'>
                {reviews?.map(review =>
                    <div>
                        <Review review={review} sauce={sauce} />
                    </div>
                )}
            </div>
        </div>
    )

}