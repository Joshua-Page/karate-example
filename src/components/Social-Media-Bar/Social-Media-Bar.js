import React from 'react';

import './Social-Media-Bar.css'

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialMediaBar = () => {
    return (
        <div className="social-media-container">
            <a href="https://facebook.com"><FaFacebook size="40px" className="social-icon-first" /></a>
            <a href="https://instagram.com"><FaInstagram size="40px" className="social-icon" /></a>
            <a href="https://twitter.com"><FaTwitter size="40px" className="social-icon" /></a >
            <a href="https://youtube.com"><FaYoutube size="40px" className="social-icon" /></a >
        </div >

    );
}

export default SocialMediaBar;