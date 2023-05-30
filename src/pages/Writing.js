import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';
import WritingCard from '../components/writing-components/WritingCard';
import { useEffect, useState, useContext, useReducer } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
const api = axios.create({ baseURL: `http://localhost:5000/writing/` });


export default function Writing() {
    const { theme } = useContext(ThemeContext);
    const initalState = {
        writings: [],
        years: [],
        tags: [],
        category: []
    }
    const writingReducer = (state = initalState, action) => {
        switch (action.type) {
            case "SET_WRITINGS":
                return { ...state, writings: action.payload };
            case "SET_TAGS":
                return { ...state, tags: action.payload };
            case "SET_CATEGORY":
                return { ...state, category: action.payload }
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(writingReducer, initalState);


    useEffect(() => {
        console.log("start useeffect");
        const getData = async () => {
            try {
                const response = await api.get('/');
                dispatch({ type: "SET_WRITINGS", payload: response.data })
                const tagsData = response.data.map((writing) => writing.tags);
                dispatch({ type: "SET_TAGS", payload: tagsData })
                const categoryData = response.data.map((writing) => writing.category);
                dispatch({ type: "SET_CATEGORY", payload: categoryData })
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        console.log("end useeffect");
    }, []);

    return (
            <Container className='g-5 py-3 mt-3 text-secondary vh-100' style={theme}>
                <div className='row mt-5  p-4'>
                    <h3 className="display-5 fw-bold text-align-text" style={{ fontFamily: 'sans-serif' }}>Writing</h3>
                    <div className="g-col col-lg-8">
                        <Card className='p-3 box-shadow-lg' style={theme}>
                            {
                                state.writings.map((writing) => <WritingCard writing={writing} />)
                            }
                        </Card>
                    </div>
                    <div className="g-col col-lg-4">
                        <Card className='shadow-lg p-2 box-shadow' style={theme}>
                            <h3 className='fw-bold fs-3 text-secondary' style={{ fontFamily: 'sans-serif' }}>Categories</h3>
                            <div className='d-inline '>
                                {state.category.map((c) => <Button className='btn btn-sm p-1 m-1 shadow border hover' style={{ width: 'auto' }}>{c}</Button>)}
                            </div>
                        </Card>
                        <Card className='shadow-lg p-2 mt-4' style={theme}>
                            <h3 className='fw-bold fs-3 text-secondary' style={{ fontFamily: 'sans-serif' }}>Tags</h3>
                            <div className='d-inline'>
                                {state.tags.map((tag) => <Button className='btn btn-sm p-1 m-1 shadow border hover'>{tag}</Button>)}
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
    )
}
