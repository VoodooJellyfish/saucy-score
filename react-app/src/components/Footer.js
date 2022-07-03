import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div id="about-container">
            <a className="about" href="https://www.linkedin.com/in/tanner-pedretti-5559141a2/"  rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="white"/>
            </a>
            <a className="about" href="https://github.com/VoodooJellyfish" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x" color="white"/></a>
        </div>
    )
}




export default Footer