
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/Demo';
import LoginFormModal from './auth/LoginModal';
import "./Navbar.css"
import SignUpModal from './auth/SignUpModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = ({ sessionUser, authenticated }) => {
    return (
        <div className='nav-container'>
            <img className='left' id="logo" src="https://thumbs.dreamstime.com/b/spicy-pepper-chili-breathing-fire-vector-clip-art-illustration-simple-gradients-fire-separate-layers-60387929.jpg" alt="chili"/>

                {!authenticated ?
                    <div className='left leftli'>
                        <NavLink className="nav-link" to='/' exact={true} activeClassName='active'>
                        {/* <i className="fas fa-home fa-lg"></i> */}
                        <FontAwesomeIcon icon={['fas', 'home']} size="lg"/>
                        </NavLink>
                    </div>
                    :
                    
                    <div className='left leftli'>
                        <NavLink className="nav-link" to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
                        <FontAwesomeIcon icon={['fas', 'home']} size="lg"/>
                        </NavLink>
                    </div>  
                }
                <div className='left leftli'>
                        <NavLink id="saucy-link" className="nav-link" to='/sauces' exact={true} activeClassName='active'>
                        Sauces <FontAwesomeIcon icon={['fas', 'fire']}/>
                        </NavLink>
                </div>
                { !authenticated ?
                    <div className="nav-li right">
                        <div>
                                    <SignUpModal/>
                            </div>
                            <div>
                                
                                    <LoginFormModal/>
                            </div>
                            <div>
                                <DemoButton className="navlink" />
                            </div>
                    </div> : 
                    <div className="right">
                        <div className="nav-li"><h4> Welcome back, {sessionUser?.username}</h4></div>
                        <div className="nav-li">
                            <LogoutButton />
                        </div>
                    </div>}
                {/* <div className='left leftli'>
                    <a className="about" href="https://www.linkedin.com/in/tanner-pedretti-5559141a2/"  rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/>
                    </a>
                </div>
                <div className='left leftli'>
                    <a className="about" href="https://github.com/VoodooJellyfish" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a>
                </div> */}
            </div>
        );
    }

export default NavBar;

