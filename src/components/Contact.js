import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import ContactUsFooter from './ContactUsFooter';
import resume_link from './icons/resume_link.png';
import './styles/contact.css';

function Contact() {
    return (
        <React.Fragment>
            <div className = 'contact-maindiv'>
                <Header prop = 'Contact'></Header>
                <div className = 'contact-h1-div'>
                    <p className = 'contact-h1'>Let's Connect</p>
                </div>
                <ContactForm></ContactForm>
                <div className = 'resume_dlink'>
                    <a className = 'resume_dlink1' target = '_blank' href = 'https://drive.google.com/file/d/1ZOngkHFimNyoMblm6tIDF29_WOVJyDzY/view?usp=sharing'>
                        <img src = {resume_link} alt = 'resume_link'/>
                    </a>    
                    <a className = 'resume_dlink1' target = '_blank' href = 'https://drive.google.com/file/d/1ZOngkHFimNyoMblm6tIDF29_WOVJyDzY/view?usp=sharing'>
                        <h3 className = 'resume_dlink_h3'>Download Resume</h3>  
                    </a>
                </div>
                <ContactUsFooter></ContactUsFooter>
            </div>
        </React.Fragment>
    )
}

export default Contact;
