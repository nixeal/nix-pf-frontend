import React, { useContext, useReducer } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../utils/ThemeContext';
import { useState, useEffect } from 'react';
import { Card, Table, Container } from 'react-bootstrap';
import EditProjectForm from '../form-component/edit-component/EditProjectForm';
const api = axios.create({ baseURL: `http://localhost:5000/project/` });


export default function ProjectList() {
    const [isEditProject, setIsEditProject] = useState(false);
    const initalState = {
        projects: [],
        editProjects: {}
    }
    const projectListReduce = (state = initalState, action) => {
        switch (action.type) {
            case "SET_PROJECTS":
                return {
                    ...state,
                    projects: action.payload
                }
            case "SET_EDITPROJECT":
                return {
                    ...state,
                    editProjects: action.payload
                }
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(projectListReduce, initalState)
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        const controller = new AbortController();
        const getLists = async () => {
            try {
                let response = await api.get('/',{signal:controller.signal});
                console.log(response)
                if (response.data) {
                    dispatch({ type: 'SET_PROJECTS', payload: response.data })
                }
            } catch (error) {
                console.log('error setting api data');
                return error
            }

        }
        getLists();
        return()=>{
            controller.abort();
        }
    }, [isEditProject]);

    const handleDelete = async (e) => {
        let id = e.target.id;
        try {
            let response = await api.delete(`/${id}`);
            if (response.data) {
                let filteredProjects = state.projects.filter((project) => id !== project._id);
                dispatch({ type: "SET_PROJECTS", payload: filteredProjects });
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    const handleEdit = async (e) => {
        let id = e.target.id;
        if (id) {
            try {
                let response = await api.get(`/${id}`);
                if (response.data) {
                    dispatch({ type: "SET_EDITPROJECT", payload: response.data })
                }
            } catch (error) {
                console.log('error fetching api data by projects id');
                return error
            }
        } else {
            console.log('cannot find id');
        }
        setIsEditProject(true)
    }
    return (
        <Container className='height-auto'>
            <Card className='shadow' style={theme}>
                <h2 className='p-2'>Project List</h2>
                <Table striped bordered hover style={theme}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Controls</th>
                        </tr>
                    </thead>
                    <tbody> {
                        state.projects.length !== 0 ? state.projects.map(item =>
                            <tr key={item._id.toString()}>
                                <td>{item.title}</td>
                                <td>{item.date}</td>
                                <td><button type="button" className="btn btn-outline-primary px-1 me-1" id={item._id} onClick={(e) => handleEdit(e)} >Edit</button>
                                    <button type="button" id={item._id} className="btn btn-outline-danger px-1" onClick={(e) => handleDelete(e)}>Delete</button>
                                </td>
                            </tr>) : <>Empty List </>}
                    </tbody>
                </Table>
            </Card>
            {isEditProject === true && <EditProjectForm project={state.editProjects} setIsEditProject={setIsEditProject}></EditProjectForm>}
        </Container>
    )
}

