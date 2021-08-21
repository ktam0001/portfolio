import background from './images/background.jpg';
import Header from "./Header";
import GenGrid from './GenGrid';
import React from 'react';
import Avatar from './images/Avatar.jpg';
import './styles/basic.css';
// import './styles/footer.css';


// const prop = {
// 	footer_main_div : 'footerC1',
// 	footer_nested_div : 'footerC2',
// 	footer_img_label : 'labelC'	
// }
const Home = () => {
    return (
        <React.Fragment>
            <Header prop = 'Home'></Header>
            <div className = "body">
                <img className = "bImg" src = {background} alt = "background image"></img>
                <img className = "center-rounded" src={Avatar} alt="Avatar" />
                <p className ="line-1 anim-typewriter">Web Developer...</p>
            </div>
            <GenGrid css = {{
                footer_main_div : 'footerC1',
                footer_nested_div : 'footerC2',
                footer_img_label : 'labelC'	
            }}></GenGrid>  
        </React.Fragment>
    );
}

export default Home;