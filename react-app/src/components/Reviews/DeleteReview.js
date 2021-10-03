// import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { thunk_getSauceReviews } from '../../store/review';

import { thunk_goDeleteReview } from '../../store/review';

export const DeleteReviewButton = ({review, ownsReview, setHasReviewed}) => {

    const user = useSelector(state => state.session.user)
    const userId = user?.id

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(thunk_goDeleteReview(review?.id))
        // await dispatch(thunk_getSauceReviews(review?.sauce_id))
        setHasReviewed(false)
        history.push(`/sauces/${review?.sauce_id}`)
    }

    return (
        <>
        {ownsReview ?
            <form onSubmit={handleDelete}>
                <button className="formRequestButtons modal-btn" id="del-review" type="submit"><FontAwesomeIcon icon={['fas', 'trash-alt']}/></button>
            </form> : <> </>}
        </>
    )
}

