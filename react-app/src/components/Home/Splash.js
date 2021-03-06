import React from "react";
// import { Link } from "react-router-dom";
import "./Splash.css"
import {  useSelector } from 'react-redux';
// import { login } from "../../store/session";

function Splash() {


    // const dispatch = useDispatch();
    useSelector(state => state.session.user)

    // let credential = 'demo@aa.io'
    // let password = 'password'
    // let demoLogin = () => { return dispatch(login(credential, password)) }


    return (
        <div className="splashContainer">
            {/* <img src="https://miro.medium.com/max/1400/1*QwKGI3ddtSnAm1jnb8PVmA.jpeg" alt="fire"/> */}
            <h1 id="splashTitle">Find Your Next Favorite Hot Sauce with Saucy-Score</h1>
            <ul id="splash-list">
                <li><span>Submit</span> your favorite sauces to share with the world</li>
                <li><span>Rate</span> and <span>Review</span> sauces you have tried</li>
                <li><span>Discover</span> new sauces that you will love</li>
            </ul>
            {/* <div className="splashLinkDiv">
                <Link to="/sign-up" className="splashLinks">Sign up</Link> 
                <Link to="login" className="splashLinks">Log in</Link>
                <Link to="/sauces" className="splashLinks">View Sauces</Link>
                <a className="splashLinks" onClick={demoLogin}>Demo</a>
            </div> */}
        </div>
    )
}

export default Splash