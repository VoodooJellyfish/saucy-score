import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { thunk_createNewSauce } from '../../store/sauce';


const CreateSauceForm = ({closeModal}) => {

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("")


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
            image_url: imageUrl

        }
        dispatch(thunk_createNewSauce(payload))
        setErrors([])
        closeModal()
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


    return (
        <form className='edit-sauce-form' onSubmit={createSauce}>
            <div className='form-group'>
                {errors.map((error, ind) => (
                    <div className='errors' key={ind}>{error}</div>
                ))}
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='name'>Name: </label>
                <input className='form-control' name='name' type='text' placeholder='Enter sauce name. . .' value={name} onChange={updateName} />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='description'>Description: </label>
                <textarea className='text-control' name='description' type='textarea' placeholder='Enter description. . .' value={description} onChange={updateDescription} />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='imageUrl'>Image Url: </label>
                <textarea className='text-control' name='imageUrl' type='textarea' placeholder='Paste Image Url. . .' value={imageUrl} onChange={updateImageUrl}/>
            </div>
            <button className="plus-btn" type='submit'>Submit Sauce</button>
        </form>
    )
}
export default CreateSauceForm;