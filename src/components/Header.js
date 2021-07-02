import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
// import './styles/header.css';
const Header = (props) => {
    // const [active, setActive] = useState('Home');
    //target.attributes[1].nodeValue
    
    return (
        <div className="ui inverted segment" style = {{'borderRadius' : '0', 'margin' : 0, 'width' : '100vw'}}>
            <div className="ui inverted secondary pointing menu">
                <NavLink exact className = {props.prop === 'Home' ? 'item active' : 'item'} to = '/'>
                    Home
                </NavLink>
                <NavLink exact className= {props.prop === 'About' ? 'item active' : 'item'} to = '/about'>
                    About
                </NavLink>
                <NavLink exact className= {props.prop === 'Contact' ? 'item active' : 'item'} to = '/contact'>
                    Contact
                </NavLink>
            </div>
        </div>
    )
}
//onClick = {event => setActive(event.target.innerHTML)}
export default Header;
