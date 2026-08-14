import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin =(event)=>{
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email,password)
        .then(result =>{
            // console.log(result);
            // alert("Successfully login.")
            navigate('/');           

        })
        .catch(error=>{
            console.log(error);
        })


    }
    
    return (
        <div className='flex my-5'>
            <form action="" className='mx-auto' onSubmit={handleLogin}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>

                
            </form>
        </div>
    )
}

export default Login