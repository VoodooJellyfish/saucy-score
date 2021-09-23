
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/Demo';


const NavBar = ({ sessionUser, authenticated }) => {
    return (
        <div className='nav-container'>
            <nav>
                <ul>
                <li>
                    <button className="styled-button">
                        <NavLink to='/' exact={true} activeClassName='active'>
                        Home
                        </NavLink>
                    </button>
                </li>
                {!authenticated ?
                    <>
                    <li>
                        
                        <button className="styled-button">
                            <NavLink to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        
                        <button className="styled-button">
                            <NavLink to='/login' exact={true} activeClassName='active'>
                            Login
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <DemoButton />
                    </li>
                    </>
                    :
                    <>
                    {/* <li>
                        <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
                        <img className='nav-url' src={sessionUser?.profile_url}></img>
                        </NavLink>
                    </li> */}
                    <li>
                        <LogoutButton />
                    </li>
                    </>
                }
                <li>
                    
                    <button className="styled-button">
                        <NavLink to='/sauces' exact={true} activeClassName='active'>
                        View Sauces
                        </NavLink>
                    </button>
                </li>
                <li>
                    <NavLink to='/about' exact={true} activeClassName='active'>
                    About Me
                    </NavLink>
                </li>
                {/* <li>
                    <Search posts={posts} activities={activities} activityTypes={activityTypes} />
                </li> */}
                </ul>
            </nav>

            </div>
        );
    }

export default NavBar;

