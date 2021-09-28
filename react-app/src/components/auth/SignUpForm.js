import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { useHistory } from 'react-router';

const SignUpForm = ({closeModal}) => {
    const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else if (password !== repeatPassword) {
        setErrors(["Passwords must match."])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className='edit-sauce-form' onSubmit={onSignUp}>
     <div className='form-group'>
        {errors.map((error, ind) => (
          <div className='errors' key={ind}>{error}</div>
        ))}
      </div>
      <div className='form-group'>
        <label className='form-label'>User Name</label>
        <input
        className='form-control'
        placeholder= "Enter username . . ."
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='form-group'>
        <label className='form-label'>Email</label>
        <input
        className='form-control'
        placeholder="Enter email . . ."
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='form-group'>
        <label className='form-label'>Password</label>
        <input
        className='form-control'
        placeholder= "Enter password. . ."
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='form-group'>
        <label className='form-label'>Repeat Password</label>
        <input
        className='form-control'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          placeholder='Confirm password. . .'

        ></input>
      </div>
      <button className='plus-btn' type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
