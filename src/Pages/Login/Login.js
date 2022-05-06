import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);


    let Element;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        setUserEmail(email);
        setUserPassword(password);
        signInWithEmailAndPassword(userEmail, userPassword);
    }

    if (loading1) {
        Element = <p className='text-dark'><span className='fs-5 fw-bold'>Loading... </span> </p>
    }
    if (error || error1) {
        Element = <p className='text-dark'><span className='fs-5 fw-bold'>Error  </span> {error?.message} {error1?.message}</p>
    }
    const navigateToSignUp = () => {
        navigate('/signup');
    }



    return (
        <div className='bg-dark pb-5'>
            <div className='container text-black'>
                {/* <p>This is login page</p> */}
                <h1 className='text-center text-danger pt-4'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h1>
                <div className='login-form mx-auto bg-danger  rounded-3 '>
                    <form onSubmit={handleEmailLogin} className='px-4 pt-4'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' required></input>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fs-5">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password' required></input>
                        </div>

                        <button type="submit" className="btn btn-dark mt-2 w-100 py-2">Log In</button>
                        <p className='text-center mt-2'><u>Forgotten Password?</u></p>
                        {/* {
                            !error ?
                                <p></p>
                                :
                                <div>
                                    <p><span className='fs-5 fw-bold'><u>Error</u>  </span> {error?.message}</p>

                                </div>
                        }
                        {
                            !googleError ?
                                <p></p>
                                :
                                <div>
                                    <p><span className='fs-5 fw-bold'><u>Error</u>  </span> {error?.message}</p>

                                </div>
                        } */}
                        {Element}

                    </form>
                    <div className='pb-4 px-4 pt-2'>
                        <button onClick={() => signInWithGoogle()} className="btn btn-dark mt-2 w-100 py-2">Sign In Using Google</button>
                        <hr />
                        <button onClick={navigateToSignUp} className="btn btn-info mt-2 w-100 py-2">Create a new account</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;