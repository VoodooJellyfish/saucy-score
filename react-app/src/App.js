import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import SauceList from './components/Sauces';
import Sauce from './components/Sauces/SauceDetail';
import Home from './components/Home';
import { authenticate } from './store/session';
import {thunk_getSauces} from './store/sauce'
import { thunk_getReviews } from './store/review';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const authenticated = sessionUser !== null

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
    dispatch(thunk_getSauces())
    dispatch(thunk_getReviews())
  }, [dispatch]);

  const sauceSlice = useSelector(state => state.sauces)
  const reviewsSlice = useSelector(state => state.reviews)

  const sauces = Object.values(sauceSlice)
  const reviews = Object.values(reviewsSlice)

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} sessionUser={sessionUser} />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/sauces' exact={true}>
          <SauceList sauces={sauces} reviews={reviews} authenticated={authenticated}/>
        </Route>
        <Route path='/sauces/:sauceId' exact={true}>
          <Sauce sauces={sauces}/>
        </Route>
        <Route path='/users' exact={true} >
          <UsersList/>
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
      <Route path='/' exact={true} >
          <Home sessionUser={sessionUser} authenticated={authenticated} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
