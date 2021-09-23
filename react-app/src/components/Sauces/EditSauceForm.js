import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { thunk_editSauce, thunk_goDeleteSauce } from '../../store/sauce';

const EditSauceForm = ({ sauce, closeModal }) => {


    const user = useSelector(state => state.session.user)
    const userId = user?.id

    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState(sauce?.name);
    const [description, setDescription] = useState(sauce?.description);
    const [imageUrl, setImageUrl] = useState(sauce?.image_url);

    const updateName= (e) => setName(e.target.value);
    const updateDescription= (e) => setDescription(e.target.value);
    const updateImageUrl= (e) => setImageUrl(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            ...sauce,
            name: name,
            description: description,
            image_url: imageUrl,
            user_id: userId,
        };
        console.log("PAYLOAD:", payload)
        await dispatch(thunk_editSauce(payload));
        closeModal()
        // history.push(`/sauces/${payload?.id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(thunk_goDeleteSauce(sauce?.id))
        history.push(`/sauces/${sauce?.id}`)
    }

    return (
        <section>
            <div>
                <form className='form-group' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name: </label>
                        <input
                            type="text"
                            placeholder="Edit name. . ."
                            value={name}
                            onChange={updateName}
                            className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'>Description: </label>
                        <input
                            type="textarea"
                            placeholder="Edit description. . ."
                            value={description}
                            onChange={updateDescription}
                            className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='imageUrl'>Image Url: </label>
                        <input
                            type="textarea"
                            placeholder="Edit Image Url. . ."
                            value={imageUrl}
                            onChange={updateImageUrl}
                            className='form-control' />
                    </div>
                    <button className="formRequestButtons" type="submit">Submit Edit</button>
                </form>
            </div>
            <div className='form-group'>
                <form onSubmit={handleDelete}>
                    <button className="formRequestButtons" id="del-comment" type="submit">Delete Sauce</button>
                </form>
            </div>
        </section>
    );
};

export default EditSauceForm;