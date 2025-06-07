import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        console.log(email, password, terms);

        setErrorMsg("")
        setSuccess(false)
        if (!terms) {
            setErrorMsg('Please accept our terms & conditions');
            return
        }

        const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (passwordRegEx.test(password) === false) {
            setErrorMsg('Password must have one lowercase, one uppercase, one number, one symbol and at lest 8 characters')
            return
        }
        createUserWithEmailAndPassword(auth, email, password).then(res => {
            console.log(res);
            setSuccess(true)
        }).catch(error => {
            setErrorMsg(error.message)
        })

    }
    return (
        <div className='max-w-sm mx-auto mt-10 border-gray-100 border p-4 rounded-2xl'>
            <h1 className='text-3xl font-bold text-center'>Please Login</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogIn}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="input"
                                placeholder="Password" />
                            <button
                                onClick={() => { setShowPassword(!showPassword) }}
                                className='btn btn-xs absolute right-3 top-2'>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />
                                }
                            </button>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <label className="label">
                            <input type="checkbox" name='terms' className="checkbox" />
                            Accept our terms & conditions
                        </label>
                        <br />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    {
                        errorMsg && <p className='text-red-500'>{errorMsg}</p>
                    }
                    {
                        success && <p className='text-green-500'>User created successfully</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;