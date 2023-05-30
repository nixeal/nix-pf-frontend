import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Card, Container, Navbar, Form, Button } from 'react-bootstrap';
import { Tag, Heart, Icon0Square } from 'react-bootstrap-icons';
import { ThemeContext } from '../../utils/ThemeContext';
import CommentCard from '../sub-pages/CommentCard';


export default function WritingPage() {
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
        <Container style={theme} className='mt-5'>
            <div className='row py-5'>
                <div className='col m-auto'>
                    <Card className='vh-100' style={theme}>
                        <Card.Header className='text-center'><Card.Title>{state.writing.title}</Card.Title></Card.Header>
                        <Card.Body>
                            <Card.Text>{state.writing.text}</Card.Text>
                            <Card.Text>{state.writing.date}</Card.Text>
                            <Card.Link>{state.writing.category}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

