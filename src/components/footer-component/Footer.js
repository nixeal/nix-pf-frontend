import React, { useState } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function Footer() {
    const { theme } = useState(ThemeContext);
    const newdate = new Date().getFullYear();
    const handleGoToGitHub = () => {
        window.open('https://github.com', 'nixeal');
    };

    const handleGoToLinkedin = () => {
        window.open('https://www.linkedin.com/in/', 'nischal---shrestha');
    };
    return (
        <>
            <div className='container-fluid shadowlg opacity-60' style={theme}>
                <footer className='footer'>
                    <div className='p-2'>
                        <ul className="nav hover pb-3 m-3">
                            <li className="nav-item mx-auto">
                                <FaInstagram className='shadow-lg fs-1'  ></FaInstagram>
                                <label className='shadow-sm'>Instagram</label>
                            </li>
                            <li className="nav-item mx-auto">
                                <FaFacebook className='shadow-lg fs-1'></FaFacebook>
                                <label className='m-1 shadow-sm'>Facebook</label>
                            </li>
                            <li className="nav-item mx-auto" onClick={handleGoToGitHub}>
                                <FaGithub className='fs-1 shadow-lg' ></FaGithub>
                                <label className='m-1 shadow-sm'>Github</label>
                            </li>
                            <li className="nav-item mx-auto" onClick={handleGoToLinkedin}>
                                    <FaLinkedin className='shadow-lg fs-1'></FaLinkedin>
                                    <label className='m-1 shadow-sm'>Linkdin</label>
                            </li>
                        </ul>
                    </div>
                    <div className='text-center text-secondary opacity-80 '>
                        <p className=" fs-4 text-muted">&copy; {newdate}
                            Nischal, Inc</p>
                        <p>This website is made by Nischal</p>
                        <p>All right reserved</p>
                        <p className='p-1 text-shadow'>Made with <FaHeart></FaHeart> in Nepal <img
                            src="https://flagcdn.com/40x30/np.png"
                            srcSet="https://flagcdn.com/80x60/np.png 2x,
                             https://flagcdn.com/120x90/np.png 3x"
                            width="25"
                            height="15"
                            alt="Nepal"></img></p>
                    </div>
                </footer>
            </div>
        </>
    )
}

