import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { thunk_editSauce, thunk_goDeleteSauce } from '../../store/sauce';

const EditSauceForm = ({ sauce, closeModal }) => {


    const user = useSelector(state => state.session.user)
    const userId = user?.id

    const dispatch = useDispatch();
    const history = useHistory();

    const errorValidation = () => {
        let errors = []
        if (!name) {
            errors.push('Hot Sauce must have a Name')
        }
        if (!imageUrl) {
            errors.push('Hot Sauce must have an Image Url')
        }
        // if (!spiceLevel) {
        //     errors.push('Hot Sauce must include a Spice Level')
        // }
        // if (!rating) {
        //     errors.push('Hot Sauce Must have a Rating')
        // }
        return errors
    }


    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(sauce?.name);
    const [description, setDescription] = useState(sauce?.description);
    const [imageUrl, setImageUrl] = useState(sauce?.image_url);

    const updateName= (e) => setName(e.target.value);
    const updateDescription= (e) => setDescription(e.target.value);
    const updateImageUrl= (e) => setImageUrl(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = errorValidation()
        if (validationErrors.length > 0) {
            return setErrors(validationErrors)
        }
        
        const payload = {
            ...sauce,
            name: name,
            description: description,
            image_url: imageUrl,
            user_id: userId,
        };
        console.log("PAYLOAD:", payload)
        await dispatch(thunk_editSauce(payload));
        setErrors([])
        closeModal()
        // history.push(`/sauces/${payload?.id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(thunk_goDeleteSauce(sauce?.id))
        history.push(`/sauces/${sauce?.id}`)
    }

    return (
        <div className="sauce-form">
            <div>
                <form className='edit-sauce-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='name'>Name: </label>
                        <input
                            type="text"
                            placeholder="Edit name. . ."
                            value={name}
                            onChange={updateName}
                            className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='description'>Description: </label>
                        <textarea
                            type="textarea"
                            placeholder="Edit description. . ."
                            value={description}
                            onChange={updateDescription}
                            className='text-control' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='imageUrl'>Image Url: </label>
                        <textarea
                            type="textarea"
                            placeholder="Edit Image Url. . ."
                            value={imageUrl}
                            onChange={updateImageUrl}
                            className='text-control' />
                    </div>
                    <button className="plus-btn" type="submit">Submit Edit</button>
                </form>
            </div>
            <div className='form-group'>
                <form onSubmit={handleDelete}>
                    <button className="formRequestButtons" id="del-comment" type="submit">Delete Sauce</button>
                </form>
            </div>
        </div>
    );
};

export default EditSauceForm;