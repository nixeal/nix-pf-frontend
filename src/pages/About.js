import React, { useContext, useReducer } from 'react';
import WritingCard from '../components/writing-components/WritingCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../css/about.css';
import { ThemeContext } from '../utils/ThemeContext';
import { Container } from 'react-bootstrap';


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
        <>
            <Container style={theme}>
                <div className='row flex-lg-row-reverse text-secondary align-items-center g-5 mt-5 py-4'>
                    <div className="row m-0">
                        <h1 className="display-5 fw-bold">About Me</h1>
                        <div className="col-lg-8 mx-auto">
                            <div className='row text-center'>
                                <p className="fs-5 mb-4 new">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                                <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <img src='./logo192.png' alt='yes'></img>
                        </div>
                    </div>
                    <div className="row text-start m-0">
                        <h1 className="display-5 fw-bold fs-1">
                            Currently I'm involved in:</h1>
                        <hr />
                        <div className="col-lg-4 mx-auto">
                            <img src='./logo192.png' alt='yes'></img>
                        </div>
                        <div className="col-lg-8">
                            <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                            </p>
                            <p className="fs-5 mb-4">Hi, I'm Nischal! I'm a software developer. Thankyou for taking your little time to peek into my life, and i welcome you to my domain where i post about web development
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <h5 className='m-3'>Want to Know more about me! Check out my profile!</h5>
                        <div className="badge-base LI-profile-badge mx-3 " data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="nischal---shrestha" data-version="v1"><a className=" badge badge-base__link LI-simple-link d-inline" href="https://np.linkedin.com/in/nischal---shrestha?trk=profile-badge">Nischal S.</a></div>
                    </div>
                </div>
            </Container>
        </>
    )
}

