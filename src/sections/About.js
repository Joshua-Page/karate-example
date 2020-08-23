import React from 'react';
import { Link } from 'react-scroll'

import './About.css'

import Button from '../components/Button/Button'

const About = () => {
    return (
        <section className="about-section" id="about">
            {/* Section one, join & image */}
            <div className="join-container">
                <div className="left-join">
                    <h1>JOIN US AND THE JKA</h1>
                    <h2 className="join-secondary">Turn your dreams into reality, improve yourself and begin studying Karate with us today!</h2>
                </div>
                <div className="right-join" />
            </div>

            {/* Section two, free trial offer */}
            <div className="free-trial-container">
                <div className="trial-left">
                    <h1>TRY A FREE TRIAL LESSON!</h1>
                </div>
                <div className="trial-right">
                    <Link activeClass="active" className="list-item" to="contact" spy={true} smooth={true} duration={500}>
                        <Button text={'Contact Us'} class={'default about trial'} />
                    </Link>
                </div>
            </div>

            {/* About text information area */}
            <div className="about-text-container">
                <h1>ABOUT EXAMPLE KARATE CLUB</h1>
                <h2 className="about-text">
                    Formed in 2020, Example Karate club is a local Karate club welcoming students of all ages and experience levels.
                </h2>
                <h2 className="about-text">
                    We welcome any potential student to join our Karate club and begin learning with us. We have lessons catered to anyone of any experience level.
                </h2>


            </div>



        </section>
    );
}

export default About;