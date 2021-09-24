import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { thunk_editReview, thunk_goDeleteReview } from '../../store/review';

const EditReviewForm = ({ sauce, review, closeModal }) => {

    const user = useSelector(state => state.session.user)
    const userId = user?.id

    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);
    const [body, setBody] = useState(review?.body);
    const [rating, setRating] = useState(review?.rating);
    const [spiceLevel, setSpiceLevel] = useState(review?.spice_level);

    const updateBody = (e) => {
        setBody(e.target.value);
    };

    const updateSpiceLevel = (e) => {
        setSpiceLevel(e.target.value);
    };

    const updateRating = (e) => {
        setRating(e.target.value);
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = errorValidation()
        if (validationErrors.length > 0) {
            return setErrors(validationErrors)
        }
        
        const payload = {
            ...review,
            body: body,
            rating: +rating,
            spice_level: +spiceLevel,
            user_id: +userId,
            sauce_id: +sauce?.id
        };
        console.log("PAYLOAD:", payload)
        await dispatch(thunk_editReview(payload));
        setErrors([])
        closeModal()
        // history.push(`/sauces/${payload?.id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(thunk_goDeleteReview(review?.id))
        history.push(`/sauces/${review?.id}`)
    }

    return (
        <div>
            <form className='create-review-form' onSubmit={handleSubmit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='form-group'>
                    <label htmlFor='body'> Review Body: </label>
                    <input className='form-control' name='body' type='textarea' placeholder='Enter review. . .' value={body} onChange={updateBody} />
                </div>
                <div className='form-group'>
                    <label htmlFor='spiceLevel'>Spice Level: </label>
                    <input className='spice-dropdown' name='spiceLevel' type='number' placeholder='Enter spice level (1, 10)' value={spiceLevel} onChange={updateSpiceLevel} min='1' max='10' />
                </div>
                <div className='form-group'>
                    <label htmlFor='rating'>Rating: </label>
                    <input className='rating-dropdown' name='rating' type='number' placeholder='Enter rating (1, 5)' value={rating} onChange={updateRating} min='1' max='5' />
                </div>
                <button className="formRequestButtons" type='submit'>Submit edit</button>
            </form>
            <form onSubmit={handleDelete}>
                <button className="formRequestButtons" id="del-comment" type="submit">Delete Sauce</button>
            </form>
        </div>
    );
};

export default EditReviewForm