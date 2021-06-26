import React from 'react'
import Header from './Header';
import Avatar from './images/Avatar.jpg';
import './styles/about.css';


const  About = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <div className = 'grid1'>
                <div className = 'grid1-div1'>
                    <img className = "center-rounded2" src={Avatar} alt="Avatar" />
                    <h2 className = "big-font">Who is this?</h2>
                </div>
                <div className = 'grid1-div2'>
                    <h2 className = "bigger-font">Karan<br/>Tamrkar</h2>
                    <p>My name is lakhan... My name is lakhan</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;
