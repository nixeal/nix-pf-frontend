import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Card, Table} from 'react-bootstrap';
import EditProjectForm from '../form-component/edit-component/EditProjectForm';
const api = axios.create({baseURL: `http://localhost:5000/project/`});


export default function ProjectList() {
    const [isProject, setIsProject] = useState(true);
    const [projects, setProjects] = useState([]);
    const [editProjects, setEditProjects] = useState({});
    useEffect(() => {
        api.get('/').then((res) => {
            setProjects([...res.data])
        }).catch((error) => {
            console.log(error);
        })
    }, [isProject]);
    const handleDelete = async(e) => {
        let id = e.target.id;
        await api.delete(`/${id}`).catch((res) => {
            if (res.data) {
                let sortedProject = projects.filter((item) => {
                    return item._id !== id;
                });
                setProjects([... sortedProject]);
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleEdit=async(e) => {
        let id = e.target.id;
        console.log(e.target.id);
        if (id) {
            await api.get(`/${id}`).then((res) => {
                setEditProjects({...res.data});
                setIsProject(false);
            }).catch((error) => {
                console.log(error);
            })
        }else{
            console.log('cannot find id');
        }
    }
    return (
        <div className='container-box height-auto'>
            <Card className='bg-dark shadow'>
                <h2>Project List</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Controls</th>
                        </tr>
                    </thead>
                    <tbody> {
                            isProject === true?
                            projects.length !== 0 ? projects.map(item => <>
                            <tr key={
                                item.id
                            }>
                                <td>{
                                    item.title
                                }</td>
                                <td>{
                                    item.date
                                }</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary px-1 me-1"
                                         id={ item._id}
                                        onClick={
                                            (e) => handleEdit(e)
                                    }>
                                        Edit
                                    </button>
                                    <button type="button"
                                        id={item._id}
                                        onClick={
                                            (e) => handleDelete(e)
                                        }
                                        className="btn btn-outline-danger px-1">Delete</button>
                                </td>
                            </tr>
                        </>) : <>Empty List</> : <>
                            <EditProjectForm project={editProjects}
                                setIsProject={setIsProject}/>
                        </>
                    } </tbody>
                </Table>
            </Card>
        </div>
    )
}

