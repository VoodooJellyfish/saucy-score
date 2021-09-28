import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router';

const LogoutButton = () => {
    const history = useHistory()
  const dispatch = useDispatch()
  
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <button className='formRequestButtons' onClick={onLogout}>
      <i className="fas fa-sign-out-alt fa-lg"></i>
  </button>;
};

export default LogoutButton;
