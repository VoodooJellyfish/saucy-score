import React from "react";
import { Link } from 'react-router-dom';
// import "./PageNotFound.css"

function PageNotFound() {
    return (
        <div className='not-found-page'>
            <div className='pnf-container'>
                <h1 className='pnf-alert'>Oops! </h1>
                <h3 className='pnf-error-text'>Page not found:</h3>
                <h3 className='pnf-error-text-2'>Error Code: (404)</h3>
                <h3 className='pnf-redirect'>Click <Link className='pnf-redirect-link' to='/'>here</Link> so we can get you back checking out hot sauce</h3>
            </div>
        </div>
    )
}

// comment needed to push for whatever reason
export default PageNotFound
