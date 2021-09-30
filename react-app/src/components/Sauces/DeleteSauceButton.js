import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_goDeleteSauce } from '../../store/sauce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { thunk_goDeleteReview } from '../../store/review';

export const DeleteSauceButton = ({sauce, closeModal, isSauceOwner}) => {

    const user = useSelector(state => state.session.user)
    const userId = user?.id

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(thunk_goDeleteSauce(sauce?.id))
        history.push(`/users/${userId}`)
    }

    return (
        <> 
        {isSauceOwner ?
            <div className='form-group'>
                    <form onSubmit={handleDelete}>
                        <button className="formRequestButtons" id="del" type="submit"><FontAwesomeIcon icon={['fas', 'trash-alt']}/></button>
                    </form>
                </div> : <> </>}
        </>
    )
}