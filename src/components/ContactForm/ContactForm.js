import React from 'react';

import './ContactForm.css'

export default function App() {
    return (
        <form className="form">
            <label htmlFor="name" className="label">Name</label>
            <input type="text" name="name" placeholder="John Doe" required />

            <label htmlFor="email" className="label">Email</label>
            <input type="email" name="email" placeholder="Johndoe@gmail.com" required />

            <label htmlFor="message" className="label">Message</label>
            <textarea name="message" placeholder="Your message to us" required />

            <input type="submit" />
        </form>
    );
}