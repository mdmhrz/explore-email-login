import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('')

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMsg("")

        createUserWithEmailAndPassword(auth, email, password).then(res => {
            console.log(res);
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
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    {
                        errorMsg && <p>{errorMsg}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;