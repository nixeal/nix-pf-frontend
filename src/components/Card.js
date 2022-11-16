import React from 'react'

export default function Card() {
    const datenew = new Date().toDateString();
    return (
        <div className='anchored card bg-dark text-secondary p-2 shadow opacity-85 '>
            <p>{datenew}</p>
            <div className='card-title text-left'>
                <h4>Higher Order Function in JS</h4>
            </div>
            <div className='anchored categories'>
                <p className='fst-italic text-decoration-underline'> Frontend</p>
            </div>
        </div>
    )
}

