
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/Demo';
import "./Navbar.css"


const NavBar = ({ sessionUser, authenticated }) => {
    return (
        <div className='nav-container'>
            <img id="logo" src="https://thumbs.dreamstime.com/b/spicy-pepper-chili-breathing-fire-vector-clip-art-illustration-simple-gradients-fire-separate-layers-60387929.jpg" alt="chili"/>
            <nav>
                <ul>
                <li className="nav-li">
                        <NavLink className="nav-link" to='/' exact={true} activeClassName='active'>
                        Home
                        </NavLink>
                </li>
                {!authenticated ?
                    <>
                    <li className="nav-li">
                            <NavLink className="nav-link" to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                            </NavLink>
                    </li>
                    <li className="nav-li">
                        
                            <NavLink className="nav-link" to='/login' exact={true} activeClassName='active'>
                            Login
                            </NavLink>
                    </li>
                    <li className="nav-li">
                        <DemoButton className="navlink" />
                    </li>
                    </>
                    :
                    <>
                    <li className="nav-li">
                        <NavLink className="nav-link" to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
                        Profile
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <LogoutButton />
                    </li>
                    </>
                }
                <li className="nav-li">
                
                        <NavLink className="nav-link" to='/sauces' exact={true} activeClassName='active'>
                        View Sauces
                        </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to='/about' exact={true} activeClassName='active'>
                    About Me
                    </NavLink>
                </li>
                {/* <li className="nav-li">
                    <Search posts={posts} activities={activities} activityTypes={activityTypes} />
                </li> */}
                </ul>
            </nav>

            </div>
        );
    }

export default NavBar;

