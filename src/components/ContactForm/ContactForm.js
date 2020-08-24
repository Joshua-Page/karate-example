import React, { Fragment } from 'react';

import './ContactForm.css'

export default function App() {
    return (
        <form className="form">
            <Fragment>
                <label htmlFor="name" className="label">Name</label>
                <input type="text" name="name" id="name" placeholder="John Doe" required />
            </Fragment>

            <Fragment>
                <label htmlFor="email" className="label">Email</label>
                <input type="email" name="email" id="email" placeholder="Johndoe@gmail.com" required />
            </Fragment>

            <Fragment>
                <label htmlFor="message" className="label">Message</label>
                <textarea name="message" id="message" placeholder="Your message to us" required />
            </Fragment>


            <input type="submit" />
        </form>
    );
}