import React from 'react'
import { useLoaderData, useNavigate, useNavigation } from 'react-router'

const PostDetails = () => {
    const postDetails=useLoaderData();
    const {id,title,body}=postDetails;
    const navigate = useNavigate();
    const navigation = useNavigation();


    const handleGohome =()=>{
          navigate('/');
    }
    const handlePrevious=()=>{
      navigate(-1);
    }
    const handleNext =()=>{
      navigate(+1);
    }


  return (
    <div>
        <div className='border-2 border-red-400 rounded-lg text-center'>
            <h1 className='text-2xl text-amber-300'>{id}</h1>
            <h1 className='text-xl text-purple-500 '>{title}</h1>
            <h1 className='w-1/2 mx-auto text-amber-400'>{body}</h1>
            <button onClick={handleGohome} className='p-2 bg-blue-500 rounded-lg text-white text-xl my-2 ' >
              Go to Home</button>
            <button onClick={handlePrevious} mx-2 className='p-2 bg-blue-500 rounded-lg text-white text-xl my-2 '>Previous</button>
            <button onClick={handleNext} mx-2 className='p-2 bg-blue-500 rounded-lg text-white text-xl my-2 '>Next</button>
        </div>
    </div>
  )
}

export default PostDetails