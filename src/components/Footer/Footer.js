import React from 'react';
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="info">
                <p>123 Example Street, London</p>
                <p>Contact@example.com</p>
                <p>01206 123456</p>
            </div>
            <div className="back-to-top">
                <Link activeClass="arrow" className="list-item" to="main" spy={true} smooth={true} duration={500}>
                    <div className="arrow"><FaArrowUp size="28px" /></div>
                </Link>
            </div>

        </div>
    );
}

export default Footer;