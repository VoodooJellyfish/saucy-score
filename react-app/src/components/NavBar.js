
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/Demo';
import LoginFormModal from './auth/LoginModal';
import "./Navbar.css"
import SignUpModal from './auth/SignUpModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from './Search/Search';


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
                            {/* <i className="fas fa-home fa-lg"></i> */}
                            <FontAwesomeIcon icon={['fas', 'home']} size="lg"/>
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
                        <FontAwesomeIcon icon={['fas', 'home']} size="lg"/>
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <LogoutButton />
                    </li>
                    </>
                }
                <li className="nav-li">
                
                        <NavLink className="nav-link" to='/sauces' exact={true} activeClassName='active'>
                        All Sauces
                        </NavLink>
                        
                </li>
                <li className="nav-li">
                    <a className="about" href="https://www.linkedin.com/in/tanner-pedretti-5559141a2/">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/>
                    </a>
                </li>
                <li className="nav-li">
                    <a className="about" href="https://github.com/VoodooJellyfish"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a>
                </li>
               
                {!authenticated ?
                <></> : 
                <li className="nav-li"><h4> Welcome back, {sessionUser?.username}</h4></li>
                }
                 <li>
                    <Search></Search>
                </li>
                </ul>
            </nav>

            </div>
        );
    }

export default NavBar;

