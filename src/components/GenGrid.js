import React from 'react'
import js_icon from './icons/js_icon.png';
import reactjs_icon from './icons/reactjs_icon.png';
import python_icon from './icons/python_icon.png';
import django_icon3 from './icons/django_icon3.png';
import restapi_icon from './icons/restapi_icon.png';
import redux_icon from './icons/redux_icon.png';
import './styles/footer.css';

const GenGrid = (props) => {
    return (
        <div className = {props.css.footer_main_div}>
            <div className = {props.css.footer_nested_div}>
                <img src = {js_icon} alt = "js_icon"/>
                <label className= {props.css.footer_img_label}>JavaScript</label>
            </div>
            <div className = {props.css.footer_nested_div}>
                <img src = {reactjs_icon} alt = "reactjs_icon"  />
                <label className= {props.css.footer_img_label}>ReactJS</label>
            </div>
            <div className = {props.css.footer_nested_div}>
                <img src = {redux_icon} alt = "redux_icon"  />
                <label className= {props.css.footer_img_label}>Redux</label>
            </div>
            <div className = {props.css.footer_nested_div}>
                <img src = {python_icon} alt = "python_icon"  />
                <label className= {props.css.footer_img_label}>Python</label>
            </div>
            <div className = {props.css.footer_nested_div}>
                <img src = {django_icon3} alt = "django_icon3"  />
                <label className= {props.css.footer_img_label}>Django</label>
            </div>
            <div className = {props.css.footer_nested_div}>
                <img src = {restapi_icon} alt = "restapi_icon"  />
                <label className= {props.css.footer_img_label}>DRF</label>
            </div>
        </div>
    )
}
// <img src = {js_icon} alt = "js_icon"/>
// <img src = {reactjs_icon} alt = "reactjs_icon"/>
export default GenGrid;

//for later upgrade : <div className ={props.css.footerC1}>