import React, { useContext,useReducer } from 'react';
import {Card, Table} from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';
import EditWritingForm from './../form-component/edit-component/EditWritingForm';
import { ThemeContext } from '../../utils/ThemeContext';
const api = axios.create({baseURL: `http://localhost:5000/writing/`})

export default function WritingList() {
    const {theme}= useContext(ThemeContext);
    const [isEditWriting, setIsEditWriting] = useState(false);
    const initalState={
        writings:[],
        editWriting:{}
    }
    const writingReducer=(state=initalState,action)=>{
        switch (action.type) {
            case "SET_WRITINGS":
                return{
                    ...state,
                    writings:action.payload
                }
            case 'SET_EDITWRITING':
                return{
                    ...state,
                    editWriting:action.payload
                }
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(writingReducer,initalState);

    useEffect(() => {
        const controller = new AbortController();
        const getList=async()=>{
            try {
                let response= await api.get('/',{signal: controller.signal}) ;
                if(response.data){
                    dispatch({type:"SET_WRITINGS",payload:response.data})
                }
            } catch (error) {
                console.log(error);
                return error;
            }
        }
        getList();
        return()=>{
            controller.abort();
        }
    }, [isEditWriting]);

    const handleDelete = async (e) => {
        try {
            const id = e.target.id;
            const response= await api.delete(`/${id}`);
               if (response.data) {
                   const sortedWriting = state.writings.filter((item) =>  item._id !== id);    
                   dispatch({type:"SET_WRITINGS",payload:sortedWriting});       
        }} catch(error){
            console.log(error);
            return error;
        }

    }
    const handleEdit = async (e) => {
        let id = e.target.id;
        try {
            if(id){
                let response = await api.get(`/${id}`);
                console.log(response)
                if(response.data){
                    dispatch({type:'SET_EDITWRITING',payload:response.data})
                    setIsEditWriting(true);
                } 
            }
        } catch (error) {
         console.log("error on handleing edit")
         return error   
        }

    }
    return (
        <div className='responsive relative' style={theme}>
            <Card className='shadow' style={theme}>
                <h2 className='p-1 m-1'>Writing List</h2>
                <Table responsive bordered hover  style={theme}>
                    <thead>
                        <tr className='m-1'>
                            <th className='p-1'>Title</th>
                            <th className='p-1'>Date</th>
                            <th className='p-1'>
                                Controls</th>
                        </tr>
                    </thead>
                    <tbody>{
                         state.writings.length !== 0 ?state.writings.map(item => <tr key={item._id.toString()}>
                            <td className='p-1'>{
                                item.title
                            }</td>
                            <td className='p-1'>{
                                item.date
                            }</td>
                            <td className='p-1'>
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
                        </tr>) : <> Empty List</> 
                    }</tbody>
                </Table>
            </Card>
            {isEditWriting===true&&<EditWritingForm writings={state.editWriting} setIsEditWriting={setIsEditWriting}></EditWritingForm>}
        </div>
    );
}

