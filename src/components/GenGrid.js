import React from 'react'
import {skills} from '../constants/grid-constants'
import './styles/footer.css';

const GenGrid = (props) => {
    const renderSkills = ()=> {
       return skills.map((skill, i) => {
            return (  
            <div key={i}className = {props.css.footer_nested_div}>
            <img src = {skill.src} alt = {skill.alt}/>
            <label className= {props.css.footer_img_label}>{skill.skill}</label>
        </div>
            )
        })
    }
    return (
        <div className = {props.css.footer_main_div}>
            {renderSkills()}
        </div>
    )
}
// <img src = {js_icon} alt = "js_icon"/>
// <img src = {reactjs_icon} alt = "reactjs_icon"/>
export default GenGrid;

//for later upgrade : <div className ={props.css.footerC1}>