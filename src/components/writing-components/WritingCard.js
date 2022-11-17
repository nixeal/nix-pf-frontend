import React from 'react'
import { Link } from 'react-router-dom';

export default function WritingCard({writing}) {
    return (
        <>
            <div className="container-box text-start text-secondary mt-2">
                <div className="row">
                    <div className='col-lg-2 m-3'>
                        <Link to={writing._id} >
                        <p className="text-start">{writing._id}</p>
                        </Link>             
                    </div>
                    <div className='col-lg-2 m-3'>
                    <p className='text-end'>{ writing.date}</p>
                    </div>
                    <div className='col-lg-8'></div>
                </div>
            </div>
        </>
    )
}

