import React from 'react'

export default function ProjectCard({project}) {
    return (
        <div className='anchored card bg-dark text-secondary p-2 m-0 shadow mb-5 opacity-85'>
            <div className='row m-0'>
                <div className='col'>
                    <img src='./logo192.png'className='img-fluid' alt='project-img'></img>
                </div>
                <div className='col'>
                    <p>{project.date} </p>
                    <div className='card-title text-left text-wrap'>
                        <h4>{project.title}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

