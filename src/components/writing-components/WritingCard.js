import React, { useContext } from 'react'
import { Col, Row, Card, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/ThemeContext';
import { FaCaretSquareRight } from 'react-icons/fa';


export default function WritingCard({ writing }) {
    const { theme } = useContext(ThemeContext)
    const changeDate = (date) => {
        const newFormat = Date(date)
        const newDate = newFormat.slice(4, 8) + newFormat.slice(10, 15)
        return newDate;
    }
    return (
        <>
            <li className='text-left p-1 m-0' style={{listStyle:'none'}}>
                {changeDate(writing.date)}
                <Link to={`/writing/${writing._id}`} className='fw-bold'>:
                <FaCaretSquareRight></FaCaretSquareRight>
                    <a className='fw-bold p-1' >{writing.title}</a>
                </Link>
            </li>
        </>
    )
}

