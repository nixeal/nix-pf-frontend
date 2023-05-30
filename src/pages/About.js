import React, { useContext, useReducer } from 'react';
import WritingCard from '../components/writing-components/WritingCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../css/about.css';
import { ThemeContext } from '../utils/ThemeContext';
import { Container, Image, Card } from 'react-bootstrap';
import CommentCard from './sub-pages/CommentCard';


const api = axios.create({ baseURL: `http://localhost:5000/writing` })

export default function About() {
    const { theme } = useContext(ThemeContext);
    let initalState = {
        writings: []
    }
    function aboutReducer(state = initalState, action) {
        switch (action.type) {
            case "FETCH_WRITINGS":
                return {
                    ...state,
                    writings: action.payload
                }
            default:
                break;
        }

    }
    const [state, dispatch] = useReducer(aboutReducer, initalState);
    const [write, setWrite] = useState([]);
    useEffect(() => {
        const getApiData = async () => {
            await api.get('/').then((response) => {
                setWrite([
                    ...write,
                    ...response.data
                ]);
            }).catch((error) => {
                console.log(error);
            })
        };
        getApiData();
    }, []);
    return (
        <Container style={theme} className='g-5 py-3 mt-3 text-secondary'>
            <div className='row mt-5  p-4'>
                <div className='col-lg-8'>
                    <h3 className="fw-bold text-align-left" style={{ fontFamily: 'sans-serif' }}>About Me</h3>
                    <div className='row-flex text-center'>
                        <p className="fs-5 mb-4 new p-1">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development</p>
                        <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development </p>
                    </div>
                    <div className="row-flex text-start m-0">
                        <h3 className="fw-bold">
                            Currently I'm involved in:</h3>
                        <hr />
                        <p className="fs-5 mb-4 p-1">As of now, I'm engaged in working as a frontend developer learning new technlogogies sucha as Nextjs and React js. In 2023 i wish to make a good reform for my life so that i could make things go my way.</p>
                        <p className="fs-5 mb-4 p-1">I'm also an optimistic person who tends to see a world little different </p>
                    </div>
                    <div className='row-flex'>
                        <h5 className='m-3'>Want to Know more about me! Check out my profile!</h5>
                        <div className="badge-base mx-3" data-locale="en_US" data-size="medium" data-type="VERTICAL" data-vanity="nischal---shrestha" data-version="v1"><a className=" badge  d-inline" href="https://np.linkedin.com/in/nischal---shrestha?trk=profile-badge">Nischal S.</a></div>
                    </div>
                    <div className='row-flex'>
                        <h5 className='m-3 fw-bold'>Recently doing</h5>
                        <hr></hr>
                        <ul className='blue-dot-list'>
                            <li>Learning to drive a car</li>
                            <li>Drinking lots of water to remain healthy</li>
                            <li>Staying warm. It is cold out here...</li>
                        </ul>
                    </div>
                    <div className='row-flex'>
                        <h5 className='m-3 fw-bold'>Random facts about me</h5>
                        <hr></hr>
                        <ul className='blue-dot-list'>
                            <li>I'm fan of Sci-Fi and Fantasy comic such as Song of Ice and Fire, Marvel comics and many more</li>
                            <li>I started my journey as a Web Developer since 2022</li>
                            <li>I like 90's rock musics and also love old Nepali songs</li>
                            <li>Mobile game I play is Clash Royal which is made by Supercell </li>
                        </ul>
                    </div>
                    <div className='row-flex'>
                        <h5 className='m-3 fw-bold'>Hardware and PC</h5>
                        <hr></hr>
                        <ul className='blue-dot-list'>
                            <li> coding pc: Lenevo Thinkpad x250</li>
                        </ul>
                    </div>
                    <div className='row-flex'>
                        <h5 className='m-3 fw-bold'>Software and Technologies used in making this site</h5>
                        <hr></hr>
                        <ul className='blue-dot-list'>
                            <li>react for frontend</li>
                            <li>node for backend</li>
                            <li>express</li>
                            <li>mongoDb for database</li>
                            <li>jest</li>
                            <li>jwt configuration</li>
                            <li>react-bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-4'>
                </div>
            </div>
        </Container>
    )
}

