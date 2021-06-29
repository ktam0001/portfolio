import React from 'react';
import CoreProjectGrid from './CoreProjectGrid';
import './styles/projectgrid.css';

const ProjectGrid = () => {
    return (
        <div className = 'pro-main-div'>
            <div className = 'pro-div1'>
                <h2 className = 'pro-h2'>Project<br />Specifics</h2>
                <hr size="8" color="black"></hr>
                <CoreProjectGrid></CoreProjectGrid>
            </div>
        </div>
    );
}
/*
<CoreProjectGrid css = {{
                    footer_main_div : 'generic-grid',
                    footer_nested_div : 'nested-div nested-div-cls2',
                    footer_img_label : 'icon-label'	
                }}>
                </CoreProjectGrid>
*/
export default ProjectGrid;