import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
const api = axios.create({baseURL: `http://localhost:5000/project/`});




export default function EditProjectForm({editProjects, setIsProject}) {
    console.log(editProjects);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [text, setText] = useState('');
    const [type, setType] = useState('');

    useEffect(()=>{
    },[])

    const handleTitle = (event) => {
        console.log(event.target.value);
        setTitle(...event.target.value);
    }
    const handleText = (e) => {
        setText(...e.target.value);
    }
    const handleTags = (e) => {
        setType(...e.target.value);
    }
    const handleDate = (e) => {
        setDate(...e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newProject = {
            title:title,
            text:text,
            date:date,
            type:type,
        };
        putProject(newProject);
    }
    const handleCancel=(e)=>{
        setIsProject(true);
    }

    const putProject=(newProject)=>{
        api.put(`/${editProjects._id}`,newProject).then((res)=>{
            res.data ? setIsProject(true): setIsProject(false);
        }).catch((error)=>{
            console.log(error);
        });
    }

    return (
        <>
            <div className='container-box  shadow p-3 mb-3'>
                <h2 className='text-start'>Edit Writing Form</h2>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="form-title">
                        <Form.Label column
                            sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"
                                value={editProjects.title}
                                onChange={(event) => handleTitle(event)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="form-text">
                        <Form.Label column
                            sm={2}>
                            Text
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text-area"
                                value={text}
                                onChange={
                                    (e) => handleText(e)
                                }
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="form-date">
                        <Form.Label column
                            sm={2}>
                            Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                             value={date}
                                onChange={
                                    (e) => handleDate(e)
                                }
                                type="date"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="form-tags">
                        <Form.Label column
                            sm={2}>
                            Type
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                             value={type}
                                onChange={
                                    (e) => handleTags(e)
                                }
                                type="list"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3">
                        <Col sm={10}>
                            <Button className='btn-secondary' type="submit">Submit</Button>
                            <Button className='btn-secondary m-1'onClick={(e)=>handleCancel(e)} type="cancel">Cancel</Button>

                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

