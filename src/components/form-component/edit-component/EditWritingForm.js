import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const api = axios.create({baseURL: `http://localhost:5000/writing/`});




export default function EditWritingForm({writings, setIsEditWriting}) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState('');
    const [category, setCategory] = useState('');

    useEffect(()=>{
        setTitle(writings.title);
        setText(writings.text);
        setCategory(writings.category);
        setDate(writings.date);
        setTags(writings.tags);
    },[writings])

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleText = (e) => {
        setText(e.target.value);
    }
    const handleTags = (e) => {
        setTags(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newWriting = {
            title:title,
            text:text,
            date:date,
            tags:tags,
            category:category
        };
        putWriting(newWriting);
        setIsEditWriting(false);
    }
    const putWriting=async(newWriting)=>{
        await api.put(`/${writings._id}`,newWriting).then((res)=>{
            console.log(res.data.message);
        }).catch((error)=>{
            console.log(error);
        });
    }
    const handleCancel=(e)=>{
        setIsEditWriting(false);
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
                                value={title}
                                placeholder={title}
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
                                placeholder={text}
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
                            <Form.Control value={date}
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
                            Tags
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={tags}
                                onChange={
                                    (e) => handleTags(e)
                                }
                                type="list"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="form-category">
                        <Form.Label column
                            sm={2}>
                            Category
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="list"
                                value={category}
                                onChange={
                                    (e) => handleCategory(e)
                                }/>
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

