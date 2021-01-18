import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

// Selector
import {goToSelector} from '../../../../redux/selectors'

// Css
import './style.css';

const ProjectCard = ({id,name,desc,imageUrl}) => {
    const history = useHistory();
    const goTo = useSelector(goToSelector);

    return (
        <div className = 'main' onClick = {() => {goTo(`/project/${id}`,history)}} >
            <img className = 'img'  src = {imageUrl} alt = 'lab' ></img>
            <div className = 'infoCont' >
                <div className = 'info' >
                    <div className = 'name' > {name} </div>
                    <div className = 'desc' > {desc} </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;