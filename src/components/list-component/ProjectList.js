import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Card, Table} from 'react-bootstrap';
const api = axios.create({baseURL: `http://localhost:5000/project/`});


export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('/').then((res) => {
            setProjects([...res.data])
        }).catch((error) => {
            console.log(error);
        })
    }, [])
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
                        projects.length != 0 ? projects.map(item => <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                            <td>
                                <button type="button" className="btn btn-outline-primary px-1 me-1">
                                    Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger px-1">Delete</button>
                            </td>
                        </tr>
                        ) : <>Empty List</>
                    } </tbody>
                </Table>
            </Card>
        </div>
    )
}

