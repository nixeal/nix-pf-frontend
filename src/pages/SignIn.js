import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const signInApi = axios.create({
    baseURL: 'http://localhost:5000/login/signin' // Adjust the URL accordingly
});

export default function SignIn() {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const obj = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            };
            //send api call
            const response = await signInApi.post('/', obj);

            // Save the token in local storage
            if(response.data.token){
                localStorage.setItem('token', response.data.token);
                navigate('/admin')
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // Handle login error (e.g., display error message to the user)
        }
    }

    return (

        <div className='card m-2 p-2'>
            <form method="POST">
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input
                        type="email"
                        ref={emailRef}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mt-2">
                    <input
                        type="password"
                        ref={passwordRef}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                    type="button"
                    onClick={(e) => onSubmit(e)}
                    className="btn btn-primary btn-lg px-4 my-2"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}
