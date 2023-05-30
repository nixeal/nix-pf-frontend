import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
const sigUpApi = axios.create({
  baseURL:`http://localhost:5000/login/signup`
})

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  async function onSubmit(e) {
      e.preventDefault();
      try {
          const obj={email:emailRef.current.value,password:passwordRef.current.value,confirmpassword:confirmPasswordRef.current.value};
         const response = await sigUpApi.post('/',obj);
         if(response.data.status === true){
          console.log(response.data.message)
         }else{
          console.log(response.data.message)
         }
          console.log(response.data.status);
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
