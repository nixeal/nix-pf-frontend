import React from 'react';
import WritingCard from '../components/blogcomponents/WritingCard';
const prop1 ={
  title:'categories',
  lists:["angular","react","html","css","javascript"]
}

export default function Writing() {
    return (
        <>
            <div className='container-fluid bg-dark col px-4 py-0'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-4'>
                    <div className="bg-dark text-secondary px-4 py-5 text-center">
                        <div className="row py-5">
                            <h1 className="display-5 fw-bold text-white">Writing</h1>
                            <div className="col-lg-8 mx-auto">
                            <WritingCard />
                            </div>
                            <div className="col-lg-4">
                              <WritingCard props={prop1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

