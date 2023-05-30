import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../utils/ThemeContext';
import axios from 'axios';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const [isSignUp, setIsSignUp] = useState(false); // Changed variable name to isSignUp

  const toggleComponent = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <div className="container-box  col-xxl-12 px-4 py-5" style={theme}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="card m-2">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-decoration-underline">Web App</h1>
            {isSignUp ? <SignIn /> : <SignIn />} {/* Render SignUp or SignIn based on the isSignUp state */}
            <p className="mt-3">
              {isSignUp ? (
                <span>
                  Already have an account?{' '}
                  <button className="btn-lg btm-outline-primary link-button" onClick={toggleComponent}>
                    Sign In
                  </button>
                </span>
              ) : (
                <span>
                  Don't have an account?{' '}
                  <button className="btn-lg btm-outline-primary  link-button" onClick={toggleComponent}>
                    Sign Up
                  </button>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
