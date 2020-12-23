import React from 'react';
import {useHistory} from 'react-router-dom';

// Components
import ProjectCard from './ProjectCard';
import Button from './Button';

// Css
import '../Css/Components/ProjectsList.css';

const ProjectsList = () => {
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
            <Button text = 'Show More' path = '/projects' color = 'Orange' history = {history} />
        </div>
    )
}

export default ProjectsList;