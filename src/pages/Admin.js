import React from 'react';
import { useState } from 'react';
import ProjectForm from '../components/form-component/create-form/ProjectForm';
import WritingForm from '../components/form-component/create-form/WritingForm';
import UserForm from '../components/form-component/create-form/UserForm';
import WritingList from '../components/list-component/WritingList';
import ProjectList from'../components/list-component/ProjectList';

export default function Admin() {
    const [isActive, setIsActive]=useState(0);
    const showWriting = (event)=> {
            setIsActive(event.target.id)
    }
    const showProject=(e)=>{
        setIsActive(e.target.id)
    }
    const showUser=(e)=>{
        setIsActive(e.target.id)
    }
    const showWritingList=(e)=>{
        setIsActive(e.target.id);
    }
    const showProjectList=(e)=>{
        setIsActive(e.target.id);
    }

    return (
        <div className='container-box bg-dark px-4 py-0 vh-100 '>
            <div className='row flex-lg-row  g-5 py-4'>
                <div className="bg-dark text-secondary px-4 py-5 text-center">
                    <h1 className="display-5 fw-bold text-align-text">Admin Panel</h1>
                    <div className='row'>
                        <div className='col-lg-2'>
                            <div className="container-box">
                                <ul>
                                    <li className="list mb-2">
                                        <button type="button" className="btn btn-outline-secondary me-2 btn-lg px-4"
                                        id='1'
                                        name='writing'
                                            onClick={(e)=>showWriting(e)
                                        }>
                                            Create Writing</button>
                                    </li>
                                    <li className="list mb-2">
                                        <button type="button" className="btn btn-outline-secondary me-2 btn-lg px-4"
                                        id='2'
                                        name='project'
                                        onClick={(e)=>showProject(e)}
                                        >Create Project</button>
                                    </li>
                                    <li className="list mb-2">
                                        <button type="button" className="btn btn-outline-secondary me-2 btn-lg px-4"
                                        id='3'
                                        name='user'
                                        onClick={(e)=>showUser(e)}>Create Users</button>
                                    </li>
                                    <li className="list mb-2">
                                        <button type="button" className="btn btn-outline-secondary me-2 btn-lg px-4"
                                        id='4'
                                        name='WritingList'
                                        onClick={(e)=>showWritingList(e)}>Writing List</button>
                                    </li>
                                    <li className="list mb-2">
                                        <button type="button" className="btn btn-outline-secondary me-2 btn-lg px-4"
                                        id='5'
                                        name='projectList'
                                        onClick={(e)=>showProjectList(e)}>Project List</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-10'>
                          {isActive === '1' && <WritingForm/>}
                          {isActive === '2' && <ProjectForm />}
                          {isActive === '3' && <UserForm />}
                          {isActive === '4' && <WritingList/>}
                          {isActive === '5' && <ProjectList/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

