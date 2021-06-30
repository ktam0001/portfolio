import React from 'react'
import call_icon from './icons/call_icon.png';
import gmail_icon from './icons/gmail_icon.png';
import linkedin_icon from './icons/linkedin_icon.png';
import github_icon from './icons/github_icon.png';
import './styles/contactusfooter.css';

function ContactUsFooter() {
    return (
        <div className = 'cufooter-main-div'>
            <h1 className = 'cufooter-h1'>Contact Us</h1>
            <div className = 'cufooter-separator'>
                <hr size="8" color="grey" width = '70%'></hr>
            </div>
            <div className = 'cufooter-contacts'>
                <div className = 'cufooter-contact'>
                    <img src = {call_icon} alt = "call_icon"/>
                    <label className= 'cufooter-contact-label'>(+91) 7999434049</label>
                </div>
                <div className = 'cufooter-contact'>
                    <img src = {gmail_icon} alt = "gmail_icon"/>
                    <label className= 'cufooter-contact-label'>karantamrkar7@gmail.com</label>
                </div>
                <div className = 'cufooter-contact'>
                    <img src = {linkedin_icon} alt = "linkedin_icon"/>
                    <label className= 'cufooter-contact-label'>www.linkedin.com/in/ktam-0001-karan-tamrakar</label>
                </div>
                <div className = 'cufooter-contact'>
                    <img src = {github_icon} alt = "github_icon"/>
                    <label className= 'cufooter-contact-label'>https://github.com/ktam0001</label>
                </div>
            </div>
        </div>
    )
}

export default ContactUsFooter;
