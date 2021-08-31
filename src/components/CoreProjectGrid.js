import React from 'react'
import projectsList from './ProjectsList';
import './styles/coreprojectgrid.css';

// core-div-2-img1
// <img classname = 'core-div-2img' src = {ReactJSimg} alt = ''/>
const CoreProjectGrid = (props) => {
    const reuse = () => {
        return projectsList.map(project => {
            return (
                <div className = {`core-div-2 ${project.coreDivImg}`}>
                    <h3 className = 'core-h3'>{project.projectName}<br/><br/></h3>
                    <p className = 'core-p-1'>Key Skills : {project.keySkills}</p>
                    <p className = 'core-p-2'>Highlights : {project.highlights}</p>
                </div>
            );
        });
    }
    return (
        <div className = 'core-div-1'>
            {reuse()}    
        </div>
    )
}

export default CoreProjectGrid;
