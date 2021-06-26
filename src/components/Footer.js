import React from 'react'
import js_icon from './icons/js_icon.png';
import reactjs_icon from './icons/reactjs_icon.png';
import python_icon from './icons/python_icon.png';
import django_icon3 from './icons/django_icon3.png';
import restapi_icon from './icons/restapi_icon.png';
import redux_icon from './icons/redux_icon.png';
import './styles/footer.css';

const Footer = () => {
    return (
        <div className ='footerC1'>
            <div className = 'footerC2'>
                <img src = {js_icon} alt = "js_icon"/>
                <label className= 'labelC'>JavaScript</label>
            </div>
            <div className = 'footerC2'>
                <img src = {reactjs_icon} alt = "reactjs_icon"  />
                <label className= 'labelC'>ReactJS</label>
            </div>
            <div className = 'footerC2'>
                <img src = {redux_icon} alt = "redux_icon"  />
                <label className= 'labelC'>Redux</label>
            </div>
            <div className = 'footerC2'>
                <img src = {python_icon} alt = "python_icon"  />
                <label className= 'labelC'>Python</label>
            </div>
            <div className = 'footerC2'>
                <img src = {django_icon3} alt = "django_icon3"  />
                <label className= 'labelC'>Django</label>
            </div>
            <div className = 'footerC2'>
                <img src = {restapi_icon} alt = "restapi_icon"  />
                <label className= 'labelC'>DRF</label>
            </div>
        </div>
    )
}
// <img src = {js_icon} alt = "js_icon"/>
// <img src = {reactjs_icon} alt = "reactjs_icon"/>
export default Footer;
