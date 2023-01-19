import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { ThemeContext } from '../../utils/ThemeContext';
import { FaStar } from 'react-icons/fa';
import { CardList } from 'react-bootstrap-icons';


export default function ProjectCard({ project }) {
    const { theme } = useContext(ThemeContext);
    return (
        <Card className='anchored text-secondary shadow mb-2  opacity-85 w-100 h-100' style={theme}>
                  <Card.Header style={theme}> <Card.Title style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{project.title}</Card.Title></Card.Header>
            <div className='row'>
                <div className='col col-lg-4'>
                    <Card.Img src='./logo192.png' className='img-fluid w-100 h-100 p-1' style={{ objectFit: 'cover' }} alt='project-img'></Card.Img>
                </div>
                <div className='col col-lg-8'>
                    <Card.Subtitle className='mt-2'>{project.date}</Card.Subtitle>
                </div>
            </div>
        </Card>
    )
}

