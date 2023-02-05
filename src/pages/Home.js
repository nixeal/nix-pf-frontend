
import { ArrowDownCircle } from 'react-bootstrap-icons';
import '../css/home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import { ThemeContext } from '../utils/ThemeContext';
import Card from '../components/card-component/Card';
import ProjectCard from '../components/project-components/ProjectCard';
import { useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import { Carousel, Container, Form, Image } from 'react-bootstrap';
import { LatestCard } from '../components/latest-component/LatestCard';
const api = axios.create({ baseURL: `http://localhost:5000/project` });
const writingApi = axios.create({ baseURL: `http://localhost:5000/writing` })



export default function Home() {
    let initalState = { projects: [], writings: [], latestWriting: [] };
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const reducer = (state = initalState, action) => {
        switch (action.type) {
            case 'FETCH_PROJECTS':
                return {
                    ...state,
                    projects: action.payload
                }
            case 'FETCH_WRITINGS':
                return {
                    ...state,
                    writings: action.payload
                }
            case 'SET_LATESTWRITING':
                return {
                    ...state,
                    latestWriting: action.payload
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect(() => {
        const getApiData = async () => {
            try {
                const request = await api.get('/');
                console.log(request)
                dispatch({ type: 'FETCH_PROJECTS', payload: request.data });
            } catch (error) {
                console.log(error);
            }
        };
        const getData = async () => {
            try {
                let response = await writingApi.get('/');
                const writinglists = response.data.filter((elem, index) => index < 6);
                dispatch({ type: 'FETCH_WRITINGS', payload: writinglists });
                const datas = response.data;
                const latest = datas.filter((elem, index) => index < 6);
                dispatch({ type: 'SET_LATESTWRITING', payload: latest });
            } catch (error) {
                console.log(error);
                return error;
            }
        };
        getApiData();
        getData();
    }, []);
    const handleReadMore = (e) => {
        if (e) {
            navigate('about');
        }
    }
    function onSubscribeClick(e) {
        if (e) {
            navigate("contact");
        }
    }

    return (
        <>
            <Container style={theme}>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-4 mt-5">
                    <div className="col-lg-6 mt-10">
                        <Image src="./anime.jpg" className="d-block shadow-dark border opacity-40 img-fluid w-50 h-50 ms-auto" alt="nixphoto" loading="lazy"></Image>
                    </div>
                    <div className="col-lg-6 ">
                        <div className='p-2 text-right mx-auto'>
                            <h1 style={theme} className="display-5 fw-bold lh-1 mb-3 p-1">Hi, My name is Nischal Shrestha and I'm a Web  Developer</h1>
                            <p style={theme}>In my free time, I enjoy traveling to new places and experiencing different cultures. I also love to ride my motorbike and explore the roads less traveled. When I'm not out and about, you can find me at home reading a good book or coding up a storm.</p>
                            <p style={theme}>checkout my few projects and blogs i have written along my way to becomming a software developer</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start" style={{fontFamily:'Roboto'}}>
                                <button type="button" className="btn btn-outline-primary btn-lg px-4 me-md-2 shadow" onClick={(e) => handleReadMore(e)} >Read More..</button>
                                <button type="button" className="btn btn-outline-danger btn-lg px-4 shadow" onClick={(e) => onSubscribeClick(e)}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-2'
                    style={
                        { textAlign: 'left' }
                    }>
                    <div className='latestpost-seg mb-4 mt-2'>
                        <div className='row '>
                            <div className='col col-lg-6 d-inline '>
                                <h2 className='fw-4 fs-3'>Latest Post</h2>
                            </div>
                            <div className=' col col-lg-6 d-inline justify-content-bottom' style={{ textAlign: "right" }}>
                                <Link to={'/writing'} className='p-1'>
                                    <label className='fs-6 p-1'>View All</label>
                                    <ArrowDownCircle></ArrowDownCircle>
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-0'>
                            <div className='col'>
                                <LatestCard latestWriting={state.latestWriting} />
                            </div>
                        </div>
                    </div>
                    <div className='blogpost-seg mb-4'>
                        <h3 className='mb-2'>Writing</h3>
                        <div className='row'>
                            {state.writings.map((eachWriting) => {
                                return (
                                    <>
                                        <div className='col-md-6 col-lg-4 mb-2' >
                                            <Card key={eachWriting._id} writing={eachWriting} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className='project-div mb-4'>
                        <div className='row'>
                            <h4 className='justify-content-start mb-2'>Projects</h4>
                        </div>
                        <div className='row'>
                            {
                                state.projects.map((project) => {
                                    return (
                                        <>
                                            <div className='col-md-6 col-lg-4 mb-0'  >
                                                <ProjectCard key={project._id} project={project} />
                                            </div>
                                        </>
                                    )
                                })
                            } </div>
                    </div>
                    <div className='g-row'>
                        <div className='flex-row'>
                            <div className='col col-flex'>
                                <Carousel fade className='w-50 shadow-lg opacity-40 border-light-subtle mb-2' style={theme}>
                                    <Carousel.Item >
                                        <img
                                            className="d-block w-100 h-100 img-fluid"
                                            src="./anime.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 h-70 img-fluid"
                                            src="./logo512.png"
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 h-70 img-fluid"
                                            src="./logo512.png"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className='g-row mt-5'>
                        <h5 className='text-decoration-underline p-1'>Stay In Touch With Me</h5>
                        <p className='p-1'>If i write somethingnew,I'll let you know via newsletter. I am not posting often so please don't spam me!.</p>
                        <Form className='shadow-light-subtle'>
                        <Form.Control type="email"  placeholder="email" className='w-50  opacity-60 mb-3' style={theme} />
                        <button type="submit"
                            style={
                                { width: "50%", 
                                fontFamily:'Roboto'}
                            }
                            onClick={
                                (e) => onSubscribeClick(e)
                            }
                            className="btn btn-outlined-danger p-1 mb-5 text-warning btn-lg shadow border hover">Subscribe</button>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}

