import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Card, Container, Navbar, Form, Button } from 'react-bootstrap';
import { Tag, Heart, Icon0Square } from 'react-bootstrap-icons';
import { ThemeContext } from '../../utils/ThemeContext';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import code from'../sub-pages/example';


export default function WritingPage() {
    const [code, setCode] = useState('');
    const initalState = {
        writing: {},
        comments: []
    }
    const individualPageReducer = (state = initalState, action) => {
        switch (action.type) {
            case 'SET_WRITING':
                return {
                    ...state,
                    writing: action.payload
                }
            case 'SET_COMMENTS':
                return {
                    ...state,
                    comments: action.payload
                }
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(individualPageReducer, initalState)
    const { theme } = useContext(ThemeContext)
    const authorRef = useRef();
    const commentRef = useRef();
    const { id } = useParams({});
    const api = axios.create({ baseURL: `http://localhost:5000/writing/${id}` });
    const commentApi = axios.create({ baseURL: `http://localhost:5000/writing/${id}/comments` });

    useEffect(() => {
        const controller = new AbortController();
        const getDataById = async () => {
            try {
                let response = await api.get('/', { signal: controller.signal });
                if (response.data) {
                    dispatch({ type: 'SET_WRITING', payload: response.data });
                    dispatch({ type: 'SET_COMMENTS', payload: response.data.comments })
                }
            } catch (error) {
                console.log(error);
                return error;
            }
        }
        setCode(code);
        getDataById();
        return () => {
            controller.abort();
        }

    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let comment = { text: commentRef.current.value, author: authorRef.current.value };
            console.log(comment)
            const res = await commentApi.post('/', comment)
            console.log(res)
            if (!res.data) {
                throw new Error(res.statusText);
            }
            // handle success
            commentRef.current.value = "";
            authorRef.current.value = "";
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Container style={theme} className='mt-5'>
                <div className='row py-5'>
                    <div className='col-lg-1 mt-5 '>
                        <Navbar className='hover responsive sticky-left'>
                            <ul style={{ listStyle: 'none' }} className='m-1 p-1'>
                                <li>
                                    <Tag></Tag>
                                </li>
                                <li>
                                    <Heart></Heart>
                                </li>
                                <li>
                                    <Icon0Square></Icon0Square>
                                </li>
                            </ul>
                        </Navbar>
                    </div>
                    <div className='col col-lg-8 col-sm-12 mt-2'>
                        <Card className='vh-100' style={theme}>
                            <Card.Body>
                                <Card.Header className='text-center'><Card.Title>{state.writing.title}</Card.Title></Card.Header>
                                <Card.Text>{state.writing.text}</Card.Text>
                                <Card.Text>{state.writing.date}</Card.Text>
                                <Card.Link>{state.writing.category}</Card.Link>
                                <AceEditor
                                    mode="javascript"
                                    theme="github"
                                    onChange={setCode}
                                    name="ace-editor"
                                    value={code}
                                    editorProps={{ $blockScrolling: true }}
                                    setOptions={{
                                        showLineNumbers: true,
                                        tabSize: 2,
                                    }}
                                    style={{ width: '100%', height: '500px' }}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-lg-3'>
                        <Card className='xw-100  mt-2 ' style={theme}>
                            <Card.Header className='fs-5 fw-bold'>Add Your Comments</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit} method='post'>
                                    <Form.Group controlId="formComment">
                                        <Form.Label className='m-1 p-1'>Comment</Form.Label>
                                        <Form.Control as="textarea" rows="3" ref={commentRef} />
                                    </Form.Group>
                                    <Form.Group controlId="formAuthor">
                                        <Form.Label className='m-1 p-1'>Author (email)</Form.Label>
                                        <Form.Control type="email" ref={authorRef} />
                                    </Form.Group>
                                    <Button variant="outline-primary" type="submit" className='mt-3 p-1'>
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card className='xw-100  mt-2 ' style={theme}>
                            <Card.Header> Comments</Card.Header>
                            {state.comments.map((e, i) => {
                                return (
                                    <Card style={theme} key={e._id} className='m-1 p-1'>
                                        <Card.Title> By: {e.author}</Card.Title>
                                        <Card.Text>Comment:{e.text}</Card.Text>
                                    </Card>
                                )
                            })}
                        </Card>
                    </div>
                </div>
            </Container>
        </>
    )
}

