import React, { useContext } from 'react';
import '../navbar-component/navbar.css';
import { Link } from "react-router-dom";
import { Image, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Person, Archive, PencilSquare, Envelope } from 'react-bootstrap-icons'
import { ThemeContext } from '../../utils/ThemeContext';



export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Nav className="navbar fixed-top navbar-expand-lg shadow" style={theme} >
            <div className='d-inline'>
                <Link className="navbar-brand ms-5" to='/'>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip id="tooltip-home">
                                Home
                            </Tooltip>
                        }>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  width='200' version="1" viewBox="0 204 500 94" style={theme}>
                            <path
                                d="M0 2490v-470h5000v940H0v-470zm4970 0v-440H30v880h4940v-440z"
                                transform="matrix(.1 0 0 -.1 0 500)"
                            ></path>
                            <path
                                d="M320 2500v-390h2170v780H320v-390zm798 115c12-14 22-33 22-41 0-22-31-17-37 6-9 35-86 44-110 13-20-26 2-50 60-67 63-18 87-41 87-84 0-41-31-62-93-62-38 0-53 5-72 25-26 25-33 55-14 55 6 0 20-11 31-25 35-45 126-28 116 22-2 12-25 25-68 40-66 23-90 43-90 74 0 32 13 51 44 65 43 20 96 10 124-21zm274 25c48-14 114-90 77-90-6 0-27 14-46 30-60 53-140 36-163-35-34-103 86-181 162-105 45 45 76 40 42-8-23-33-67-52-119-52-134 0-173 195-51 251 48 22 50 22 98 9zm-774-102l72-102v102c0 84 3 102 15 102 13 0 15-21 15-130 0-108-3-130-15-130-8 0-45 43-82 96l-68 97-3-97c-2-88-4-96-22-96-19 0-20 7-20 130 0 168 8 170 108 28zm242-28c0-109-2-130-15-130s-15 21-15 130 2 130 15 130 15-21 15-130zm740 75v-55h140v55c0 42 3 55 15 55 13 0 15-21 15-130s-2-130-15-130c-12 0-15 13-15 60v60h-140v-60c0-47-3-60-15-60-13 0-15 21-15 130s2 130 15 130c12 0 15-13 15-55zm434-62c27-65 51-124 53-130 11-27-27-11-42 17s-19 30-78 30c-60 0-63-1-74-30-6-17-19-30-28-30-20 0-23-10 42 148 32 80 51 112 62 112 12 0 31-34 65-117zm166 2v-115h65c51 0 65-3 65-15s-16-15-80-15h-80v130c0 109 2 130 15 130 12 0 15-19 15-115z"
                                transform="matrix(.1 0 0 -.1 0 500)"
                            ></path>
                            <path
                                d="M1941 2528c-12-28-19-53-17-55s24-3 49-1l44 3-20 53c-11 28-23 52-27 52s-17-23-29-52zM2650 2553c-31-11-60-47-60-74 0-38 28-67 80-82 28-8 46-19 48-30 5-24-25-33-47-13s-81 22-81 2c0-26 35-57 73-66 74-16 137 21 137 81 0 33-25 56-86 78-28 10-49 23-49 31 0 21 44 25 51 6 4-11 19-16 45-16 38 0 38 0 28 29-16 45-88 73-139 54zM3660 2542c-30-14-35-23-38-55-4-49 15-71 79-92 48-16 63-37 34-49-18-6-45 2-45 15 0 5-18 9-39 9-34 0-38-3-34-19 9-37 48-63 95-63 23-1 54 2 66 6 42 14 61 98 28 125-6 5-34 18-61 28-29 11-50 25-50 33 0 21 44 25 51 6 7-18 74-23 74-5 0 24-24 52-55 65-45 18-63 18-105-4zM2840 2420v-130h80v100h80v-100h70v260h-35c-35 0-35 0-35-45v-45h-80v90h-80v-130zM3130 2420v-130h40c39 0 40 1 40 35 0 22 5 35 13 35 7 0 21-16 30-35 15-31 21-35 57-35 22 0 40 2 40 5s-9 23-19 43c-19 37-19 38 0 61s25 74 13 106c-12 29-60 45-139 45h-75v-130zm139 56c16-19 4-43-25-50-34-9-44 0-44 35 0 25 4 29 29 29 16 0 34-6 40-14zM3400 2420v-130h180v30c0 29-1 30-50 30-43 0-50 3-50 20s7 20 45 20c43 0 45 1 45 30s-2 30-45 30c-38 0-45 3-45 20s7 20 50 20c49 0 50 1 50 30v30h-180v-130zM3850 2515c0-34 1-35 40-35h40v-190h80v189l38 3c34 3 37 6 40 36l3 32h-241v-35zM4120 2420v-130h80v100h80v-100h70v260h-35c-35 0-35 0-35-45v-45h-80v90h-80v-130zM4438 2427c-27-68-48-126-48-130s17-7 39-7c30 0 40 4 44 20s14 20 50 20c37 0 47-4 52-20s15-20 46-20c47 0 48-13-14 145l-44 110-39 3-39 3-47-124zm111-39c1-5-10-8-24-8-28 0-30 4-13 51l11 33 13-34c7-19 13-38 13-42z"
                                transform="matrix(.1 0 0 -.1 0 500)"
                            ></path>
                        </svg></span>
                    </OverlayTrigger>
                </Link>
            </div>
            <button className="navbar-toggler m-1" style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#closenavbar" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
            </button>
            <div className="collapse navbar-collapse" id="closenavbar">
                <ul className="navbar-nav fw-bold fs-5 ms-auto" style={{ fontFamily: "sans-serif" }} >
                    <li className="nav-item nav-home">
                        <OverlayTrigger placement='bottom'
                            overlay={
                                <Tooltip id='tooltip-about'>
                                    About
                                </Tooltip>
                            }>
                            <Link className="nav-link active fw-bold" style={theme} to="/about" ><Person className='mx-1 hover-zoom'></Person>About Me</Link>
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
                    <li className='nav-item'>
                        <OverlayTrigger
                            placement='bottom'
                            overlay={
                                <Tooltip id='tooltip-theme-change'>
                                    You can click here to change the theme
                                </Tooltip>
                            }>
                            <label className="switch m-2">
                                <input type="checkbox" onClick={toggleTheme}></input>
                                <span className="slider"></span>
                            </label>
                        </OverlayTrigger>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}

