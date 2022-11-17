import React from 'react';
import '../css/home.css';
import Card from '../components/Card';
import ProjectCard from '../components/project-components/ProjectCard';
import {useEffect, useState} from 'react';
import axios from 'axios';
const api = axios.create({baseURL: `http://localhost:5000/project`});

function onSubscribeClick(event) {
    console.log(event);
}

export default function Home() {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        const getApiData = async () => {
            await api.get('/').then((response) => {
                setProject([
                    ...projects,
                    ...response.data
                ]);
            }).catch((error) => {
                console.log(error);
            });
        };
        getApiData();
    },[])

    return (
        <>
            <div className="container-fluid bg-dark  text-secondary col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./anime.jpg" className="d-block mx-lg-auto img-fluid shadow opacity-50" alt="nixphoto" width="700" height="500" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-decoration-underline">Hi, My name is Nischal Shrestha and I'm a Software Engineer</h1>
                        <p className="lead">Do enjoy your life while you still have time. The motivation as a developer people say and i quote "Persistance is key to success"</p>
                        <p className="lead">checkout my few projects and blogs i have written along my way to becomming a software developer</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-outline-primary btn-lg px-4 me-md-2">Read More..</button>
                            <button type="button" className="btn btn-outline-danger btn-lg px-4">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='container mb-20'
                    style={
                        {textAlign: 'left'}
                }>
                    <div className='latestpost-seg mb-4'>
                        <h3>Latest Post</h3>
                        <div className='row'>
                            <div className='col-md-6 col-lg-4 mb-2'>
                                <Card/>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-2'>
                                <Card/>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-2'>
                                <Card/>
                            </div>
                        </div>
                    </div>
                    <div className='blogpost-seg mb-4'>
                        <h3 className='mb-2'>Writing</h3>
                        <div className='row'>
                            <div className='col-md-6 col-lg-4 ml-auto me-auto mb-2'>
                                <Card/>
                            </div>
                            <div className='col-md-6 col-lg-4 ml-auto me-auto mb-2'>
                                <Card/>
                            </div>
                            <div className='col-md-6 col-lg-4 ml-auto me-auto mb-2'>
                                <Card/>
                            </div>
                        </div>
                    </div>
                    <div className='project-div mb-4'>
                        <div className='row'>
                            <h3 className='justify-content-start mb-2'>Projects</h3>
                        </div>
                        <div className='row'>
                            {
                            projects.map((project) => {
                                return (
                                    <>
                                        <div className='col-md-6 col-lg-4 mb-2'>
                                            <ProjectCard project={project}/>
                                        </div>
                                    </>
                                )
                            })
                        } </div>
                    </div>
                    <div className='container-box position-relative'>
                        <h2 className='text-decoration-underline'>Stay In Touch With Me</h2>
                        <p>If i write somethingnew,I'll let you know via newsletter. I am not posting often so please don't spam me!.</p>
                        <button type="button"
                            style={
                                {width: "50%"}
                            }
                            onClick={
                                () => onSubscribeClick(Event)
                            }
                            className="btn btn-outlined-danger m-2 text-dark btn-lg border hover">Subscribe</button>
                    </div>
                </div>
            </div>

        </>
    )
}

