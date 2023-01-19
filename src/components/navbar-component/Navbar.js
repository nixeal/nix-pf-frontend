import React, { useContext } from 'react';
import '../navbar-component/navbar.css';
import { Link } from "react-router-dom";
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Sun, Person, House, Archive, PencilSquare, Envelope } from 'react-bootstrap-icons'
import { ThemeContext } from '../../utils/ThemeContext';


export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Nav className="navbar fixed-top navbar-expand-lg navbar shadow" style={theme} >
                <div className='d-inline'>
                    <Link className="navbar-brand mx-1" to='/'>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-home">
                                    Home
                                </Tooltip>
                            }>
                            <span><House></House></span>
                        </OverlayTrigger>
                    </Link>
                </div>
                <button className="navbar-toggler m-1" style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#closenavbar" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="closenavbar">
                    <ul className="navbar-nav fw-bold fs-5 ms-auto" style={{fontFamily:"sans-serif"}} >
                        <li className="nav-item ">
                            <OverlayTrigger placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-about'>
                                        About
                                    </Tooltip>
                                }>
                                <Link className="nav-link active fw-bold" style={theme}  to="/about" ><Person className='mx-1'></Person>About Me</Link>
                            </OverlayTrigger>
                        </li>
                        <li className="nav-item">
                            <OverlayTrigger
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-projects'>
                                        Projects
                                    </Tooltip>
                                }>
                                <Link className="nav-link active" to="/project" style={theme}><Archive className='mx-1'></Archive>projects</Link>
                            </OverlayTrigger>
                        </li>
                        <li className="nav-item">
                            <OverlayTrigger
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-writing'>
                                        Writing
                                    </Tooltip>
                                }>
                                <Link className="nav-link active" to="/writing" style={theme}><PencilSquare className='mx-1'></PencilSquare>Writing</Link>
                            </OverlayTrigger>
                        </li>
                        <li className="nav-item">
                            <OverlayTrigger
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-contact'>
                                        Contact
                                    </Tooltip>
                                }>
                                <Link className="nav-link active" to="/contact" style={theme}><Envelope className='mx-1'></Envelope>Contact</Link>
                            </OverlayTrigger>
                        </li>
                        <li className='nav-item'>
                            <OverlayTrigger
                                placement='bottom'
                                overlay={
                                    <Tooltip id='tooltip-theme-change'>
                                        You can click here to change the theme
                                    </Tooltip>
                                }>
                                <Sun onClick={toggleTheme} className='mx-1'></Sun>
                            </OverlayTrigger>
                        </li>
                    </ul>
                </div>
            </Nav>
        </>
    )
}

