import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LogoutButton = () => {
    const history = useHistory()
  const dispatch = useDispatch()
  
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <button className='formRequestButtons' onClick={onLogout}>
     <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="lg"/>
  </button>;
};

export default LogoutButton;
