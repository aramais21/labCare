import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

// Selector
import {goToSelector} from '../redux/selectors/index'

// Css
import  '../Css/Components/ProjectCard.css'

const ProjectCard = ({id,name,desc,imageUrl}) => {
    const history = useHistory();
    const goTo = useSelector(goToSelector);

    return (
        <div className = 'main' >
            <img className = 'img'  src = {imageUrl} ></img>
            <div className = 'infoCont' >
                <div className = 'info' >
                    <div className = 'name' > {name} </div>
                    <div className = 'desc' > {desc} </div>
                    <div className = 'btn'  onClick = {() => {goTo(`/project/${id}`,history)}}>
                        see more
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;