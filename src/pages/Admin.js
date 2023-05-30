import React, { useContext } from 'react';
import { useState } from 'react';
import ProjectForm from '../components/form-component/create-form/ProjectForm';
import WritingForm from '../components/form-component/create-form/WritingForm';
import UserForm from '../components/form-component/create-form/UserForm';
import WritingList from '../components/list-component/WritingList';
import ProjectList from'../components/list-component/ProjectList';
import { Button, Container, Navbar } from 'react-bootstrap';
import { ThemeContext } from '../utils/ThemeContext';

export default function Admin() {
    const {theme}= useContext(ThemeContext);
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
        <Container fluid className='px-4 py-0 vh-100% ' style={theme}>
            <div className='row flex-lg-row  g-5 py-4'>
                <div className="px-4 py-5 text-left">
                    <h1 className="display-5 fw-bold text-align-text">Admin Panel</h1>
                    <div className='row'>
                        <div className='col-lg-2 border shadow'>
                            <Navbar expand='lg'>
                                <ul className='vh-100 p-0' style={{listStyle:'none', width:'100%'}}>
                                    <li className="nav-item mb-2">
                                        <Button type="button" className="btn btn-outline-warning w-100 "
                                        id='1'
                                        name='writing'
                                            onClick={(e)=>showWriting(e)
                                        }>
                                            Create Writing</Button>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Button type="button" className="btn btn-outline-warning w-100"
                                        id='2'
                                        name='project'
                                        onClick={(e)=>showProject(e)}
                                        >Create Project</Button>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Button type="button" className="btn btn-outline-warning w-100 "
                                        id='3'
                                        name='user'
                                        onClick={(e)=>showUser(e)}>Create Users</Button>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Button type="button" className="btn btn-outline-warning w-100"
                                        id='4'
                                        name='WritingList'
                                        onClick={(e)=>showWritingList(e)}>Writing List</Button>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Button type="button" className="btn btn-outline-warning w-100"
                                        id='5'
                                        name='projectList'
                                        onClick={(e)=>showProjectList(e)}>Project List</Button>
                                    </li>
                                </ul>
                            </Navbar>
                        </div>
                        <div className='col-lg-10 col-sm-12 p-2'>
                          {isActive === '1' && <WritingForm setIsActive={setIsActive}/>}
                          {isActive === '2' && <ProjectForm  setIsActive={setIsActive}/>}
                          {isActive === '3' && <UserForm  setIsActive={setIsActive}/>}
                          {isActive === '4' && <WritingList setIsActive={setIsActive}/>}
                          {isActive === '5' && <ProjectList setIsActive={setIsActive}/>}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

