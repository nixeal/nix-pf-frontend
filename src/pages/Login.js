import { NavLink } from 'react-router-dom';
import React, {useState} from 'react'
console.log("hello from login")
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit(e) {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {email, password}
            )
        });
        const data = await res.json();
        console.log(data);
        if ( ! data) {
            window.alert("Invlid Credentials");
        } else {
            window.alert("Sucess");
        }
        <NavLink to={'/'}></NavLink>
    }
    return (
        <>
            <div className="container-box bg-dark text-white col-xxl-12 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./anime.jpg" className="d-block mx-lg-auto img-fluid shadow-20 border opacity-50" alt="nixphoto" width="700" height="500" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-decoration-underline">Web App</h1>
                        <form method='POST' className='text-white'>
                            <h1 className="h3 mb-3 fw-normal">Please login</h1>
                            <div className="form-floating">
                                <input type="email"
                                    onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    }
                                    className="form-control bg-dark text-white"
                                    id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input type="password"
                                    onChange={
                                        (e) => {
                                            setPassword(e.target.value)
                                        }
                                    }
                                    className="form-control bg-dark text-white"
                                    id="floatingPassword"
                                    placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <span>
                                        <input type="checkbox" value="remember-me"/></span>
                                    <p>remember me</p>
                                </label>
                            </div>
                            <button type="button"
                                onClick={
                                    (e) => {
                                        onSubmit(e)
                                    }
                                }
                                className="btn btn-primary btn-lg px-4 me-md-2">Login</button>
                            <button type="button" className="btn btn-outline-secondary me-2 btn-lg px-4">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

