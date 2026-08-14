import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../FireBase/firebase'

export const Login = () => {

    const [error, setError] = useState("")
    const [isLoginSuccess, setLoginInfo] = useState(false);

    const handleLoginSubmit = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // setError(result.message);
                   
                 sendEmailVerification(auth.currentUser)
                                    .then(() => {
                                        // Email verification sent!
                                        // ... here email will shows a verified code then click for verification.
                                        alert('checked your gmail for verification.')
                                        setLoginInfo(true);
                                    })
               
            })
            .catch(error => {
                // setError(error.message);
            })
    }
    return (
        <div className='flex my-5' >
            <form
                onSubmit={handleLoginSubmit}
                className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4"
            >
                

                <label className="label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                />

                <label className="label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                />

                <button type="submit" className="btn btn-neutral mt-4">
                    Login
                </button>

                {isLoginSuccess && (
                    <p className="text-green-500">
                        Login Successfully
                    </p>
                )}

                {error && (
                    <p className="text-red-500">
                        {error}
                    </p>
                )}
            </form>


        </div>
    )
}
