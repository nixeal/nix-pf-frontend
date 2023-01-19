import React, { useContext, useReducer } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import ProjectCard from '../components/project-components/ProjectCard';
import { useEffect } from 'react';
import axios from 'axios';
import { Button, Container,Card } from 'react-bootstrap';
const api = axios.create({ baseURL: `http://localhost:5000/project` });


export default function Project() {
    const initalState = {
        projects: [],
        tags: [],
        category: []
    }
    const projectReducer = (state = initalState, action) => {
        switch (action.type) {
            case "SET_PROJECTS":
                return { ...state, projects: action.payload }
            case "SET_TAGS":
                return { ...state, tags: action.payload }
            default:
                break;
        }
    };
    const [state, dispatch] = useReducer(projectReducer, initalState);
    const { theme } = useContext(ThemeContext)
    const getData = async () => {
        try {
            let response = await api.get('/');
            dispatch({ type: 'SET_PROJECTS', payload: response.data })
            const copyOfResponse = response.data;
            const noOfTags = response.data.map((e) => e.type);
            dispatch({ type: "SET_TAGS", payload: [...noOfTags] })
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <Container  style={theme} className='g-5 py-3 mt-3 text-secondary vh-100'>
                <div className='row flex-lg-row-reverse align-items-center g-5 mt-0'>
                    <h3 className="display-4 fw-bold text-align-left" style={{fontFamily:'sans-serif'}}>Projects</h3>
                    <div className='row'>
                        <div className='col-flex col-lg-8 m-0 p-0'>
                                <div className='row m-0 p-0'>
                                    {
                                        state.projects.map((project )=> {
                                            return (
                                                <div className='col-lg-4 col-md-6 m-0' key={project._id}><ProjectCard project={project} /></div>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                        <div className='col-flex col-lg-4 m-0'>
                            <Card className='box-shadow shadow-sm p-2 mb-3' style={theme}>
                                <h3 className='fw-bold fs-3 text-secondary' style={{fontFamily:'sans-serif'}}>Categories</h3>
                                {state.category.length===0?<>Empty</>:<>content</>}
                            </Card>
                            <Card className='box-shadow shadow-sm p-2 mb-2' style={theme}>
                                <h3 className='fw-bold fs-3 text-secondary'>Tags</h3>
                                <div>
                                    {state.tags.map((tag,index) => <Button key={index.toString()} className='btn btn-sm p-1 m-1 shadow border hover'>{tag}</Button>)}
                                </div>
                            </Card>
                        </div>
                    </div>
                    </div>
            </Container>
        </>
    )
}

