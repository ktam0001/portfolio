import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import ContactUsFooter from './ContactUsFooter';
import './styles/contact.css';

function Contact() {
    return (
        <div className = 'contact-maindiv'>
            <Header></Header>
            <div className = 'contact-h1-div'>
                <h1 className = 'contact-h1'>Let's Connect</h1>
            </div>
            <ContactForm></ContactForm>
            <ContactUsFooter></ContactUsFooter>
        </div>
    )
}

export default Contact;
