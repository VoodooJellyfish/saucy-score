
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/Demo';
import LoginFormModal from './auth/LoginModal';
import "./Navbar.css"
import SignUpModal from './auth/SignUpModal';


const NavBar = ({ sessionUser, authenticated }) => {
    return (
        <div className='nav-container'>
            <img id="logo" src="https://thumbs.dreamstime.com/b/spicy-pepper-chili-breathing-fire-vector-clip-art-illustration-simple-gradients-fire-separate-layers-60387929.jpg" alt="chili"/>
            <nav>
                <ul>
                
                {!authenticated ?
                    <>
                        <li className="nav-li">
                            <NavLink className="nav-link" to='/' exact={true} activeClassName='active'>
                            <i className="fas fa-home fa-lg"></i>
                            </NavLink>
                        </li>
                        <li className="nav-li">
                                <SignUpModal/>
                        </li>
                        <li className="nav-li">
                            
                                <LoginFormModal/>
                        </li>
                        <li className="nav-li">
                            <DemoButton className="navlink" />
                        </li>
                        
                    </>
                    :
                    <>
                    <li className="nav-li">
                        <NavLink className="nav-link" to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
                        <i className="fas fa-home fa-lg"></i>
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
                    {/* <NavLink className="nav-link" to='/about' exact={true} activeClassName='active'>
                    About Me
                    </NavLink> */}
                    <a href="https://www.linkedin.com/in/tanner-pedretti-5559141a2/">
                        {/* <img src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e5-v2.png/jcr:content/renditions/01-dsk-e5-v2-2x.png" alt={'linked In'}></img> */}
                    </a>
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

