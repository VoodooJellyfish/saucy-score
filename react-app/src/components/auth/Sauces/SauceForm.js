import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { thunk_createNewSauce } from '../../../store/sauce';


const CreateSauceForm = ({closeModal}) => {

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [spiceLevel, setSpiceLevel] = useState()
    const [rating, setRating] = useState()

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const errorValidation = () => {
        let errors = []
        if (!name) {
            errors.push('Hot Sauce must have a Name')
        }
        if (!imageUrl) {
            errors.push('Hot Sauce must have an Image Url')
        }
        if (!spiceLevel) {
            errors.push('Post must include a Spice Level')
        }
        if (!rating) {
            errors.push('Hot Sauce Must have a Rating')
        }
        return errors
    }
    
    const createSauce = e => {
        e.preventDefault()
        let validationErrors = errorValidation()
        if (validationErrors.length > 0) {
            return setErrors(validationErrors)
        }
        const payload = {
            user_id: +sessionUser?.id,
            name: name,
            description: description,
            spice_level: +spiceLevel,
            rating: +rating,
            image_url: imageUrl

        }
        dispatch(thunk_createNewSauce(payload))
        setErrors([])
        // closeModal()
    }

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    const updateSpiceLevel = (e) => {
        setSpiceLevel(e.target.value);
    };

    const updateRating = (e) => {
        setRating(e.target.value);
    };

    return (
        <form className='create-sauce-form' onSubmit={createSauce}>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input className='form-control' name='name' type='text' placeholder='Enter sauce name' value={name} onChange={updateName} />
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Description: </label>
                <textarea className='text-control' name='description' type='textarea' placeholder='Enter optional description' value={description} onChange={updateDescription} />
            </div>
            <div className='form-group'>
                <label htmlFor='spiceLevel'>Spice Level: </label>
                <input className='spice-dropdown' name='spiceLevel' type='number' placeholder='Enter spice level (1, 10)' value={spiceLevel} onChange={updateSpiceLevel} min='1' max='10' />
            </div>
            <div className='form-group'>
                <label htmlFor='rating'>Rating: </label>
                <input className='rating-dropdown' name='rating' type='number' placeholder='Enter rating (1, 5)' value={rating} onChange={updateRating} min='1' max='5' />
            </div>
            <div className='form-group'>
                <label htmlFor='imageUrl'>Image Url: </label>
                <input className='imageUrl' name='imageUrl' type='textarea' placeholder='Enter Image Url' value={imageUrl} onChange={updateImageUrl}/>
            </div>
            <button className="formRequestButtons" type='submit'>Create</button>
        </form>
    )
}
export default CreateSauceForm;