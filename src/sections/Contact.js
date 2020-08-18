import React, { Fragment } from 'react';

import './Contact.css'
import Form from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer/Footer';

const Contact = () => {
    return (
        <Fragment>
            <div className="contact-section" id="contact">
                <div className="headers">
                    <h1>CONTACT US</h1>
                    <p className="sub-header">Whether you’re looking for more info or are ready to start training!</p>
                </div>
            </div>
            <div className="form-div">
                <Form />
            </div>
            <Footer />
        </Fragment>
    );
}

export default Contact;


