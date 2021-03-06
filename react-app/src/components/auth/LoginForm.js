import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import "./Form.css"
import { useHistory } from 'react-router';

const LoginForm = ({closeModal}) => {
    const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
      
    } else {
        history.push(`/users/${user?.id}`)
    }
    // closeModal()
    
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="edit-sauce-form" onSubmit={onLogin}>
      <div className='form-group'>
        {errors.map((error, ind) => (
          <div className='errors' key={ind}>{error}</div>
        ))}
      </div>
      <div className='form-group'>
        <label className='form-label' htmlFor='email'>Email</label>
        <input className='form-control'
          name='email'
          type='text'
          placeholder='Enter email. . .'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='form-group'>
        <label className='form-label' htmlFor='password'>Password</label>
        <input className='form-control'
          name='password'
          type='password'
          placeholder='Enter password. . .'
          value={password}
          onChange={updatePassword}
        />
        <button className="btn login" type='submit'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
