import React from 'react'
import GenGrid from './GenGrid';
import Header from './Header';
import Avatar from './images/Avatar.jpg';
import ProjectGrid from './ProjectGrid';
import './styles/about.css';
import TechGrid from './TechGrid';
import instaprofilelogo from './icons/instagram-profilelogo.png';

const  About = () => {
    return (
        <React.Fragment>
            <Header prop = 'About'></Header>
            <div className = 'grid1'>
                <div className = 'grid1-div1'>
                    <img className = "center-rounded2" src={Avatar} alt="Avatar" />
                    <h2 className = "big-font">Who is this?</h2>
                </div>
                <div className = 'grid1-div2'>
                    <h2 className = "bigger-font">Karan<br/>Tamrkar</h2>
                    
                        <ul className = 'intro-p'>
                            <li>I'm a Software Developer from India, Skilled in ReactJS, JS, Python, Django and DRF.</li>
                            <li>Flexible to adapt new technologies and love to explore them.</li>
                            <li>A hobby photographer exploring the world through a different lens.</li>
                        </ul>
                    
                </div>
            </div>
            <TechGrid></TechGrid>
            <ProjectGrid></ProjectGrid>
            <div className = 'instalink'>
                <a target = '_blank' href = 'https://www.instagram.com/karan_tamrakar/'>
                    <img className = 'instalink-img' src = {instaprofilelogo} alt = 'insta_logo'/>
                </a>
                <a target = '_blank' href = 'https://www.instagram.com/karan_tamrakar/'>
                    <h3 className = 'instalink-h3'>See through my lens...</h3>
                </a>
            </div>
            <GenGrid css = {{
                footer_main_div : 'footerC1 footerC1-duplicate',
                footer_nested_div : 'footerC2',
                footer_img_label : 'labelC'	
            }}></GenGrid>
        </React.Fragment>
    )
}

export default About;
