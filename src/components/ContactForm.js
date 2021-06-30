import React, {useState} from 'react';
import './styles/contactform.css';
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [msg, setMsg] = useState('');
    const formHandler = (e) => {
        e.preventDefault();
        console.log("form got submitted");
    }
    return (
        <div className = 'form-div'>
            <form className = 'main-form' onSubmit = {e => formHandler(e)}>
                <div className = 'form-div-1'>
                     
                    <input placeHolder = 'Name' className = 'input-name' onChange = {e=>setName(e.target.value)} type = 'text' value = {name}></input>
                                    
                    <input placeHolder = 'E-Mail' className = 'input-email' onChange = {e=>setMail(e.target.value)} type = 'email' value = {email}></input>
                
                </div>
                <br/>
                <div className = 'form-div-2'>
                    <label className = 'msg-label'>How can I help?</label><br/>
                    <textarea className = 'input-msg' type = 'textarea' onChange = {e=>setMsg(e.target.value)} value = {msg}></textarea>
                </div>
                <br/>
                <input className = 'input-submit' type = 'submit' value = "Submit"></input>
            </form>
        </div>
    );
}
/* 
<form onSubmit = {formHandler}>
                <input type = 'text' value = 'initial text value'></input>
                <input type = 'submit'></input>
            </form>
*/
export default ContactForm;
