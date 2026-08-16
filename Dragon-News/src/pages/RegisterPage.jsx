import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const RegisterPage = () => {

  const { createUser ,setUser} = useContext(AuthContext);

  const [nameError,setNameError] = useState('');

  const handleRegister = (event) => {

    event.preventDefault();

    const name = event.target.name.value;

    if(name.length<5){
      setNameError("Name should more than 5 letters.")
      return;
    }else{
      setNameError("");
    }

    const url = event.target.url.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("You already register using same email.");
        // ..
      });
  }

  return (
    <div className='flex justify-center my-17'>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />
            <label className="label font-semibold">Photo URL</label>
            <input type="text" name='url' className="input" placeholder="URL" />
            <label className="label font-semibold">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label font-semibold">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />

            <button  className="btn btn-neutral mt-4">Register</button>
            {
              nameError && <p className='text-red-400 px-2'>{nameError}</p>
            }
            <p className='text-center my-3 text-sm'>All ready you have any account? <NavLink to="/auth/login" className='text-blue-500'>Login</NavLink></p>
          </fieldset>
        </form>
      </div>

    </div>
  )
}

export default RegisterPage