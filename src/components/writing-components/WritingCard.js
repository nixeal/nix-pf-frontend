import React from 'react'
import axios from 'axios';

export default function WritingCard({writing}) {
    return (
        <>
            <div className="container-box text-start text-secondary mt-2">
                <div className="row">
                    <div className='col-lg-2'>
                <p className="text-start">{writing.title}</p>
                    </div>
                    <div className='col-lg-2'>
                    <p className='text-end'>{ writing.date}</p>
                    </div>
                    <div className='col-lg-8'></div>
                </div>
            </div>
        </>
    )
}

