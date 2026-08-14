import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react'
import { auth } from '../../Firebase/Firebase';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {
   
    const userInfo = useContext(AuthContext);

    const {createUser} = userInfo ;

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email,password)
        .then(result =>{

        })
        .catch(error =>{

        })
        

    }

    return (
        <div className='flex my-5 max-h-screen'>
            <form action="" onSubmit={handleSubmit} className='mx-auto'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Register</legend>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Register