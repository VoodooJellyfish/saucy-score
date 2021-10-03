import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { thunk_createNewReview } from '../../store/review';
// import { findScore, findSpice } from '../Sauces/SauceDetail';
// import { thunk_getSauceReviews } from '../../store/review';

const CreateReviewForm = ({sauce, closeModal, hasReviewed, setHasReviewed, previousReview, setScore, setSpice}) => {

    const [errors, setErrors] = useState([]);
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);
    const [spiceLevel, setSpiceLevel] = useState(0);
    // const [hasReviewed, setHasReviewed] = useState(false);


    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const errorValidation = () => {
        let errors = []
        if (!body) {
            errors.push('Review must have a body')
        }
        if (!rating) {
            errors.push('Review must have a rating')
        }
        if (!spiceLevel) {
            errors.push('Review must include a spice level')
        }
        return errors
    }

    const createReview =  async e => {
        e.preventDefault()
        let validationErrors = errorValidation()
        if (validationErrors.length > 0) {
            return setErrors(validationErrors)
        }
        const payload = {
            user_id: +sessionUser?.id,
            body: body,
            rating: +rating,
            spice_level: +spiceLevel,
            sauce_id: +sauce?.id
        }

        await dispatch(thunk_createNewReview(payload))
        // await dispatch(thunk_getSauceReviews(payload?.sauce_id))
        setHasReviewed(!hasReviewed)
        setErrors([])
        closeModal()
    }

    const updateBody = (e) => {
        setBody(e.target.value);
    };

    const updateSpiceLevel = (e) => {
        setSpiceLevel(e.target.value);
    };

    const updateRating = (e) => {
        setRating(e.target.value);
    };

    return (
        <form className='edit-sauce-form' onSubmit={createReview}>
            <div className='form-group'>
                {errors.map((error, ind) => (
                    <div className='errors' key={ind}>{error}</div>
                ))}
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='body'> Review Body: </label>
                <textarea className='text-control' name='body' type='textarea' placeholder='Enter review. . .' value={body} onChange={updateBody} />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='spiceLevel'>Spice Level: </label>
                <input className='dropdown' name='spiceLevel' type='number' placeholder='Enter spice level (1, 10)' value={spiceLevel} onChange={updateSpiceLevel} min='1' max='10' />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='rating'>Rating: </label>
                <input className='dropdown' name='rating' type='number' placeholder='Enter rating (1, 5)' value={rating} onChange={updateRating} min='1' max='5' />
            </div>
            <button className="plus-btn" type='submit'>Create Review</button>
        </form>
    )   
}

export default CreateReviewForm;
