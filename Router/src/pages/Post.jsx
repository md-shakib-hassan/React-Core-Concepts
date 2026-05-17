import React from 'react'
import { NavLink, useNavigate } from 'react-router';

const Post = ({ element }) => {
    const { id, title } = element;
     const navigate = useNavigate();


    const handleGohome =()=>{
          navigate('/');
    }
    const handleNext =()=>{
      navigate(+1);
    }
    const handleDetails=()=>{
        navigate(`/posts/${id}`)
    }

    return (

        <div className='border-2 border-amber-400 text-center  rounded-lg'>
            <h1 className='text-2xl font-semibold text-purple-600'>{id}</h1>
            <h1 className='text-2xl font-semibold text-purple-600'>{title}</h1>

            <NavLink to={`/posts/${id}`} className='text-2xl text-pink-600 p-3 rounded-3xl'>Show Post Details.
            
            </NavLink>
            
            <button onClick={handleDetails}  className='p-2 bg-blue-500 rounded-lg text-white text-xl my-2 '>Show details no:{id}</button>

            <button onClick={handleGohome} className='p-2 bg-blue-500 rounded-lg text-white text-xl my-2 ' >Go to Home</button>

            <button onClick={handleNext} mt-5 className='p-2 bg-blue-500 rounded-lg text-white text-xl my-2 '>Next</button>
        </div>

    )
}

export default Post