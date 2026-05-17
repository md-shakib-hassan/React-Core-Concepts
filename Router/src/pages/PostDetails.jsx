import React from 'react'
import { useLoaderData } from 'react-router'

const PostDetails = () => {
    const postDetails=useLoaderData();
    const {id,title,body}=postDetails;

  return (
    <div>
        <div className='border-2 border-red-400 rounded-lg text-center'>
            <h1 className='text-2xl text-amber-300'>{id}</h1>
            <h1 className='text-xl text-purple-500 '>{title}</h1>
            <h1 className='w-1/2 mx-auto text-amber-400'>{body}</h1>
        </div>
    </div>
  )
}

export default PostDetails