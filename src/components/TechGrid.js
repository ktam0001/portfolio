import React from 'react';
import GenGrid from './GenGrid';
import './styles/techgrid.css';

const TechGrid = () => {
    return (
        <div className = 'tech-div1'>
            <h2 className = 'tech-h2'>Technical<br />Skills</h2>
            <hr size="8" color="black"></hr>
            <GenGrid css = {{
                footer_main_div : 'generic-grid',
                footer_nested_div : 'nested-div nested-div-cls2',
                footer_img_label : 'icon-label'	
            }}>
            </GenGrid>
        </div>
    );
}

export default TechGrid;