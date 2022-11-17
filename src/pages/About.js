import React from 'react';
import WritingCard from '../components/writing-components/WritingCard';
import axios from 'axios';
import {useState, useEffect} from 'react';
import '../css/about.css'


const api = axios.create({baseURL: `http://localhost:5000/writing`})

export default function About() {
    const [write, setWrite] = useState([]);
    useEffect(() => {
        const getApiData = async () => {
            await api.get('/').then((response) => {
                setWrite([
                    ...write,
                    ...response.data
                ]);
            }).catch((error) => {
                console.log(error);
            })
        };
        getApiData();
    }, []);
    return (
        <>
            <div className='container-fluid bg-dark col px-4 py-0 text-secondary'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                    <div className="bg-dark text-secondary px-4 py-5 text-center">
                        <div className="row py-5">
                            <h1 className="display-5 fw-bold text-white">About Me</h1>
                            <div className="col-lg-8 mx-auto">
                                <div className='row text-center'>
                                    <p className="fs-5 mb-4 new">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
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
                            <h1 className="display-5 fw-bold fs-1 text-white">
                                Currently I'm involved in:</h1>
                            <hr/>
                            <div className="col-lg-8">
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                            </div>
                        </div>
                        {
                        write.map((writing) => {
                            return (
                                <>
                                    <WritingCard writing={writing}/>
                                </>
                            )
                        })
                    } </div>
                </div>
            </div>
        </>
    )
}

