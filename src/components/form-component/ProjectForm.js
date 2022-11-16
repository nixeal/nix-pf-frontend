import React from 'react'
import {Col, Button, Form, Row, ModalTitle} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
const api = axios.create({baseURL: `http://localhost:5000/project`});

export default function ProjectForm() {
    const [title, setTitle]=useState('');
    const [text, setText]=useState('');
    const [date,setDate]=useState('');
    const [type, setType]=useState('');
    const submitProject=(event)=>{
        event.preventDefault();
        const newProject = {
                title:title,
                text:text,
                date:date,
                type:type,
        }
        console.log(newProject);
        sendNewProject(newProject);

    }
    const sendNewProject=(newProject)=>{
        api.post('/',newProject).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        });
    }
    const changeTitle=(event)=>{
        setTitle(event.target.value);
        console.log(title);
    }
    const changeText=(event)=>{
        setText(event.target.value);
        console.log(text);
    }
    const changeDate=(event)=>{
        setDate(event.target.value);
        console.log(event.target.value);
    }
    const changeType=(event)=>{
        setType(event.target.value);
        console.log(event.target.value);
    }

    return (
        <>
            <div className='container-box responsive shadow p-3 mb-3'>
                <h2 className='text-start'>Create Project</h2>
                <Form name='writing-form' onSubmit={(event)=>submitProject(event)}>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="title">
                        <Form.Label column
                            sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={title} onChange={(event)=>changeTitle(event)} placeholder="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="text">
                        <Form.Label column
                            sm={2}>
                            Text
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={text} onChange={(event)=>changeText(event)} type="text-area" placeholder="writing"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="date">
                        <Form.Label column
                            sm={2}>
                            Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={date} onChange={(event)=>changeDate(event)} type="date"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3" 
                        controlId="type">
                        <Form.Label column
                            sm={2}>
                            Type
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select value={type} onChange={(event)=>changeType(event)} aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="Angular">Angular</option>
                                <option value="React">React</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Node js">Node Js</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3">
                        <Col sm={10}>
                            <Button className='btn btn-lg btn-secondary' type="submit" >Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

