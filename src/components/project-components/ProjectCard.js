import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { ThemeContext } from '../../utils/ThemeContext';
import Javascript from '../../logos/Javascript.png';
import Node from '../../logos/Node.png';
import ReactPng from '../../logos/React.png';

export default function ProjectCard({ project }) {
    const {theme} = useContext(ThemeContext)
    let logo;
    if(project.type==='Javascript'){
        logo=Javascript;
    }else if(project.type==='Node'){
        logo=Node;
    }else{
        logo=ReactPng;
    }
    return (
        <Card className='anchored text-secondary shadow mb-2 opacity-85 w-100 h-100' style={theme}>
            <Card.Header style={theme}> <Card.Title className='fw-bold text-secondary' style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{project.title}</Card.Title></Card.Header>
            <div className='row'>
                <div className='col col-lg-4'>
                    <Card.Img src={logo} className='img-fluid w-100 h-100 p-1' style={{ objectFit: 'cover' }} alt='project-img'></Card.Img>
                </div>
                <div className='col col-lg-8'>
                    <Card.Subtitle className='mt-2'>{project.date}</Card.Subtitle>                
                    </div>
            </div>
        </Card>
    )
}

