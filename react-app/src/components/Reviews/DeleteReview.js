import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { thunk_goDeleteReview } from '../../store/review';

export const DeleteReviewButton = ({review, closeDeleteReviewModal}) => {

    const user = useSelector(state => state.session.user)
    const userId = user?.id

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(thunk_goDeleteReview(review?.id))
        history.push(`/sauces/${review?.sauce_id}`)
    }

    return (
        <form onSubmit={handleDelete}>
            <button className="formRequestButtons" id="del-review" type="submit">Delete Review</button>
        </form>
    )
}

