import React from 'react';
import { Link } from 'react-scroll'

import './Main.css'

import Button from '../components/Button/Button'

const Main = () => {
    return (
        <div className="main-section" id="main">
            <div className="text-area">
                <h2>WELCOME TO</h2>
                <h1>EXAMPLE KARATE CLUB</h1>
            </div>
            <div className="button-box">
                <Link activeClass="active" className="list-item" to="classes" spy={true} smooth={true} duration={500}>
                    <Button text={'Get Started'} class={'default primary'} />
                </Link>

                <Link activeClass="active" className="list-item" to="about" spy={true} smooth={true} duration={500}>
                    <Button text={'About Us'} class={'default secondary'} />
                </Link>
            </div>
        </div>
    );
}

export default Main;