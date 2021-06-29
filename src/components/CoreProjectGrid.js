import React from 'react'
import ReactJSimg from './images/reactjs-backicon.png';
import './styles/coreprojectgrid.css';


// core-div-2-img1
// <img classname = 'core-div-2img' src = {ReactJSimg} alt = ''/>
const CoreProjectGrid = (props) => {
    return (
        <div className = 'core-div-1'>
            <div className = 'core-div-2'>
                <h3 className = 'core-h3'>Dashboard Implementation</h3>
                <p className = 'core-p-1'>Key Skills : ReactJS, JavaScript</p>
                <p className = 'core-p-2'>Highlights : Development and maintenance</p>
            </div>
            <div className = 'core-div-2'>
                <h3 className = 'core-h3'>Portfolio Webapp</h3>
                <p className = 'core-p-1'>Key Skills : ReactJS, JS</p>
                <p className = 'core-p-2'>Highlights : Development and maintenance</p>
            </div>
            <div className = 'core-div-2'>
                <h3 className = 'core-h3'>API Integration<br/><br/></h3>
                <p className = 'core-p-1'>Key Skills : Python, Django, DRF</p>
                <p className = 'core-p-2'>Highlights : Backend development, REST API, JWT</p>
            </div>
            <div className = 'core-div-2'>
                <h3 className = 'core-h3'>DataPower<br/><br/></h3>
                <p className = 'core-p-1'>Key Skills : Python, DRF</p>
                <p className = 'core-p-2'>Highlights : Developement and maintenance of REST services</p>
            </div>
            <div className = 'core-div-2'>
                <h3 className = 'core-h3'>ADIA<br/><br/></h3>
                <p className = 'core-p-1'>Key Skills : Python</p>
                <p className = 'core-p-2'>Highlights : Analysis of requirements, design, develop and integrating the algorithm</p>
            </div>
            <div className = 'core-div-2'>
                <h3 className = 'core-h3'>NetVault<br/><br/></h3>
                <p className = 'core-p-1'>Key Skills : Functional Testing</p>
                <p className = 'core-p-2'>Highlights : Writing test-cases, testing and delivering the product to the consumer</p>
            </div>
        </div>
    )
}

export default CoreProjectGrid;
