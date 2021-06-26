import Header from "./Header";
import Footer from './Footer';
import React from 'react';
import Avatar from './images/Avatar.jpg';
import './styles/basic.css';
import background from './images/background.jpg';


const Home = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <div className = "body">
                <img className = "bImg" src = {background} alt = "background image"></img>
                <img className = "center-rounded" src={Avatar} alt="Avatar" />
                <p className ="line-1 anim-typewriter">Web Developer...</p>
            </div>
            <Footer></Footer>  
        </React.Fragment>
    );
}

export default Home;