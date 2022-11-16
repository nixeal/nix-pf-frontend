import React from 'react';
import axios from 'axios';
import WritingCard from '../components/writing-components/WritingCard';
import {useEffect, useState} from 'react';
const api = axios.create({baseURL: `http://localhost:5000/writing/`});


export default function Writing() {
    const [write, setWrite] = useState([]);
    const [years, setYears] = useState([]);


    useEffect(() => {
        let getData = async () => {
            await api.get('/').then((res) => {
                setYears([
                    ...years,
                    res.data.date
                ]);
                setWrite([
                    ...write,
                    ...res.data
                ]);
            }).catch(error => console.log(error));
            console.log(years, write);
        };
        getData();
    }, []);

    return (
        <>
            <div className='container-fluid bg-dark col px-4 py-0 vh-100'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-4'>
                    <div className="bg-dark text-secondary px-4 py-5 text-center">
                        <h1 className="display-5 fw-bold text-align-text">Writing</h1>
                        <div className="row">
                            <div className="col col-lg-8">
{
    write.map((writing=>{
        return(
            <WritingCard writing={writing}/>
        )
    }))
}                            </div>
                            <div className="col col-lg-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
