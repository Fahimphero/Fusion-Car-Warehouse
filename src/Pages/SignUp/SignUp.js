import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const SignUp = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    const [customError, setCustomError] = useState('');
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate(from, { replace: true });
    }

    const handleEmailSignUp = (event) => {
        event.preventDefault();
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(password)
        const confirmPassword = event.target.confirmPassword.value;
        // console.log(confirmPassword)
        setUserEmail(email);
        setUserPassword(password);
        setUserConfirmPassword(confirmPassword);
        if (confirmPassword === password) {
            createUserWithEmailAndPassword(email, password);
            toast('Verification Email Sent')
        }
        else {
            setCustomError("Your two passwords didn't match");

        }

    }



    return (
        <div className='bg-dark pb-5'>
            <div className='container text-black'>
                {/* <p>This is login page</p> */}
                <h1 className='text-center text-danger pt-4'><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></h1>
                <div className='login-form mx-auto bg-danger  rounded-3 '>
                    <form onSubmit={handleEmailSignUp} className='p-4'>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label fs-5">Your Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="name" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' required></input>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fs-5">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password' required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleConfirmPassword1" className="form-label fs-5">Confirm Password</label>
                            <input type="password" name='confirmPassword' className="form-control" id="exampleConfirmPassword1" placeholder='confirm password' required></input>
                        </div>

                        <button type="submit" className="btn btn-dark mt-2 w-100 py-2 mb-3">SignUp</button>

                        {
                            customError ? <p><span className='fs-5 fw-bold'><u>Error</u>  </span> {customError}</p> : ''
                        }
                        {
                            !error ?
                                <p></p>
                                :
                                <div>
                                    <p><span className='fs-5 fw-bold'><u>Error</u>  </span> {error?.message}</p>

                                </div>
                        }

                    </form>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;