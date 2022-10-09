import React from 'react'

export default function ProjectCard() {
    return (
        <div className='anchored card bg-dark text-white p-2 m-0 shadow mb-5 opacity-85'>
            <div className='row m-0'>
                <div className='col'>
                    <img src='./logo192.png'className='img-fluid' alt='project-img'></img>
                </div>
                <div className='col'>
                    <p>time </p>
                    <div className='card-title text-left'>
                        <h4>Higher Order Function in JS</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

