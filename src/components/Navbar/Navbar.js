import React from 'react';
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link activeClass="active" className="list-item nav" to="about" spy={true} smooth={true} duration={500}>
                About
            </Link>
            <Link activeClass="active" className="list-item nav" to="classes" spy={true} smooth={true} duration={500}>
                Classes
            </Link>
            <Link activeClass="active" className="list-item nav" to="contact" spy={true} smooth={true} duration={500}>
                Contact
            </Link>
        </div>
    );
}

export default Navbar;