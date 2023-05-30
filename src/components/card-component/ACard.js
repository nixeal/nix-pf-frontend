import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/ThemeContext';
export default function ACard({writing}) {
    const datenew = Date(writing.date).slice(10,15)
    const {theme}= useContext(ThemeContext)
    console.log(writing)
    return (
        <div className='anchored card text-secondary p-2 shadow opacity-85' style={theme}>
            <p className='fw-bold'>{datenew}</p>
            <div className='card-title text-left'>
                <h4 style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{writing.title}</h4>
            </div>
            <div className='anchored categories'>
                <p className='fst-italic text-decoration-underline'> {writing.category.toLowerCase()}</p>
            </div>
        </div>
    )
}

