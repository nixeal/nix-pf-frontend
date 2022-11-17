import React from 'react';
import {Card, Table} from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';
import EditWritingForm from './../form-component/edit-component/EditWritingForm';
const api = axios.create({baseURL: `http://localhost:5000/writing/`})

export default function WritingList() {
    const [isWriting, setIsWritings] = useState(true);
    const [writings, setWritings] = useState([]);
    const [editWriting, setEditWriting]= useState({});
    useEffect(() => {
        api.get('/').then((res) => {
            setWritings([...res.data]);
        }).catch((error) => {
            console.log(error);
        });

    },[isWriting]);
    const handleDelete = (e) => {
        let id = e.target.id;
        api.delete(`/${id}`).then((res) => {
            if (res.data) {
                let sortedWriting = writings.filter((item) => {
                    return item._id !== id;
                });
                return setWritings([...sortedWriting]);
            };
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleEdit = (e) => {
        let id = e.target.id
        setIsWritings(false);
        if (id) {
            api.get(`/${id}`).then((res) => {
                setEditWriting({...res.data});
            }).catch((error) => {})
        }
    }
    return (
        <div className='container-box  responsive relative'>
            <Card className='bg-dark shadow'>
                <h2>Writing List</h2>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>
                                Controls</th>
                        </tr>
                    </thead>
                    <tbody>{
                        isWriting === true ?
                            writings.length !== 0 ? writings.map(item => <tr key={
                                item._id
                            }>
                                <td>{
                                    item.title
                                }</td>
                                <td>{
                                    item.date
                                }</td>
                                <td>
                                    <button type="button"
                                        id={
                                            item._id
                                        }
                                        onClick={
                                            (e) => handleEdit(e)
                                        }
                                        className="btn btn-outline-primary px-1 me-1">
                                        Edit
                                    </button>
                                    <button type="button"
                                        id={
                                            item._id
                                        }
                                        onClick={
                                            (e) => handleDelete(e)
                                        }
                                        className="btn btn-outline-danger px-1">Delete</button>
                                </td>
                            </tr>) : <>Empty List</>
                        :<EditWritingForm setIsWritings={setIsWritings} writings={editWriting}/>
                    }</tbody>
                </Table>
            </Card>
        </div>
    );
}

