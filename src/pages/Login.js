import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../utils/ThemeContext';
import axios from 'axios';
const sigUpApi = axios.create({
    baseURL:`http://localhost:5000/login`
})



const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const obj={email:emailRef.current.value,password:passwordRef.current.value,confirmPassword:confirmPasswordRef.current.value};
           const response = await sigUpApi.post('/',obj);
            console.log(response);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorCode, errorMessage }
        }

    }
    return (
        <form method='POST' className='text-white'>
            <h1 className="h3 mb-3 fw-normal">Please login</h1>
            <div className="form-floating">
                <input type="email"
                    ref={emailRef}
                    className="form-control bg-dark text-white"
                    id="floatingInput"
                    placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-2">
                <input type="password"
                    ref={passwordRef}
                    className="form-control bg-dark text-white"
                    id="floatingPassword"
                    placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating mt-2">
                <input type="password"
                    ref={confirmPasswordRef}
                    className="form-control bg-dark text-white"
                    id="confirmPassword"
                    placeholder="Password" />
                <label for="confirmPassword"> c Password</label>
            </div>
            <button type="button"
                onClick={
                    (e) => {
                        onSubmit(e)
                    }
                }
                className="btn btn-primary btn-lg px-4 me-md-2">Login</button>
        </form>
    )
}

export default function Login() {
    const { theme } = useContext(ThemeContext);
    const [isSingup, setIsSignUp] = useState(false);

    return (
        <>
            <div className="container-box  col-xxl-12 px-4 py-5" style={theme}>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./anime.jpg" className="d-block mx-lg-auto img-fluid shadow-20 border opacity-50" alt="nixphoto" width="500" height="400" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-decoration-underline">Web App</h1>
                        <SignUp  />
                    </div>
                </div>
            </div>
        </>
    )
}

