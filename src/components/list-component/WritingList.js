import React from 'react';
import {Card, Table} from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';
const api = axios.create({baseURL: `http://localhost:5000/writing/`})

export default function WritingList() {
    const [writings, setWritings] = useState([]);
    useEffect(() => {
        api.get('/').then((res) => {
            setWritings([...res.data]);
            console.log(writings, 'this is from writings array');
        }).catch((error) => {
            console.log(error);
        });


    }, [])
    return (
        <div className='container-box  responsive relative'>
            <Card className='bg-dark shadow'>
                <h2>Writing List</h2>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th> Controls</th>
                        </tr>
                    </thead>
                    <tbody> {

                        writings.length != 0 ? writings.map(item => <tr key={
                            item.id
                        }>
                            <td>{
                                item.title
                            }</td>
                            <td>{
                                item.date
                            }</td>
                            <td>
                                <button type="button" className="btn btn-outline-primary px-1 me-1">
                                    Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger px-1">Delete</button>
                            </td>
                        </tr>) : <>Empty List</>
                    } </tbody>
                </Table>
            </Card>
        </div>
    );
}

