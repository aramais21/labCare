import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Selector
import {goToSelector} from '../redux/selectors'

// Components
import ProjectCard from './ProjectCard'

// Css
import '../Css/Components/ProjectsList.css'

const ProjectsList = () => {
    const goTo = useSelector(goToSelector);
    const history = useHistory();
    const data = [
        {
            id: Math.floor(Math.random()*10000),
            name:'Project 0',
            desc:'This is a project we were working on during the last year. We succeded in bringing the feeling of acomplishment back to the firm',
            imageUrl:'https://images.pexels.com/photos/3735715/pexels-photo-3735715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: Math.floor(Math.random()*10000),
            name:'Project 1',
            desc:'This is a project we were working on during the last year. We succeded in bringing the feeling of acomplishment back to the firm',
            imageUrl:'https://images.pexels.com/photos/3735715/pexels-photo-3735715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: Math.floor(Math.random()*10000),
            name:'Project 2',
            desc:'This is a project we were working on during the last year. We succeded in bringing the feeling of acomplishment back to the firm',
            imageUrl:'https://images.pexels.com/photos/3735715/pexels-photo-3735715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }   
    ]
    return (
        <div className = 'mainProject' >
            <div className = 'mainCont' >
                {data.map((item) => {
                    return <ProjectCard key = {item.id} {...item} />
                })}
            </div>
            <div className = 'btnProject' onClick = {() => {goTo('/projects', history)}} >
                Show More
                <div className = 'arrow' >
                </div>
            </div>
        </div>
    )
}

export default ProjectsList;