import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';


export default function WritingPage() {
    const {id}= useParams();
    const api = axios.create({baseURL: `http://localhost:5000/writing/${id}`});
    useEffect(()=>{
        api.get('/').then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);
    return (
        <>
            <div className='container-fluid bg-dark text-secondary'>
                Individual page
            </div>
        </>

    )
}

