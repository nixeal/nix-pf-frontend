import React from 'react';
import ProjectCard from '../components/project-components/ProjectCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
const api = axios.create({baseURL: `http://localhost:5000/project`});


export default function Project() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getData = () => {
            api.get('/').then((res) => {
                setProjects([
                    ...projects,
                    ...res.data
                ]);
            }).catch((error) => {
                console.log(error);
            });
        };
        getData();
    }, [])
    return (
        <>
            <div className='container-fluid bg-dark col px-4 py-0 vh-100'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-4'>
                    <div className="bg-dark text-secondary px-4 py-5 text-center">
                        <h1 className="display-5 fw-bold text-align-text">Projects</h1>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='container-box mx-auto'>
                                    {
                                    projects.map((project => {
                                        return (
                                            <div className='row'>
                                                <div className='col col-lg-4'><ProjectCard project={project}/></div>
                                                <div className='col col-lg-4'><ProjectCard project={project}/></div>
                                                <div className='col col-lg-4'><ProjectCard project={project}/></div>
                                            </div>
                                        )
                                    }))
                                } </div>
                            </div>
                            <div className='col-lg-4'>
                                <h2>Categories</h2>
                                <div className='container-box'>

                                </div>
                                <h2>Tags</h2>
                                <div className='container-box'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

