import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const LoginPage = () => {

  const{Login,setLoginInfo,setUser} = useContext(AuthContext);

  const [error,setError] =useState('');

  const location =useLocation();
 

  const navigate = useNavigate();

  const handleLogin =(event)=>{
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        Login(email,password)
        .then(result =>{
          alert("Successfully login")
          // setUser(result);

          setUser(result);
          
          
          navigate(`${location.state ? location.state :'/'}`);

        })
        .catch(error =>{
          setError("Invalid password.")
        })


  }
  return (
    <div className='flex justify-center my-17'>
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' required className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" required name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      {
        error && <p className='text-red-400 px-6'>{error}</p>
      }
      <p className='text-center my-5 text-sm'>do you have any account? <NavLink to="/auth/register" className='text-red-400'>Register</NavLink></p>
    </div>

    </div>
  )
}

export default LoginPage