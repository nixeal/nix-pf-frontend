import React from 'react';
import WritingCard from '../components/blogcomponents/WritingCard';

export default function About() {
    console.log("on about page");
    return (
        <>
            <div className='container-fluid bg-dark col px-4 py-0'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                    <div className="bg-dark text-secondary px-4 py-5 text-center">
                        <div className="row py-5">
                            <h1 className="display-5 fw-bold text-white">About Me</h1>
                            <div className="col-lg-8 mx-auto">
                                <div className='row text-center'>
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img src='./logo192.png' alt='yes'></img>
                            </div>
                        </div>
                        <div className="row text-start">
                            <h1 className="display-5 fw-bold fs-1 text-white"> Currently I'm involved in:</h1>
                            <hr/>
                            <div className="col-lg-8">
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                            </div>
                        </div>
                      <WritingCard />
                       <WritingCard />
                    </div>
                </div>
            </div>
        </>
    )
}

