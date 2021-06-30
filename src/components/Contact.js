import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import './styles/contact.css';

function Contact() {
    return (
        <div className = 'contact-maindiv'>
            <Header></Header>
            <div className = 'contact-h1-div'>
                <h1 className = 'contact-h1'>Let's Connect</h1>
            </div>
            <ContactForm></ContactForm>
            <br/><br/>
        </div>
    )
}

export default Contact;
