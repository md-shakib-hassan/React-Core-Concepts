import React from 'react'
import { NavLink } from 'react-router';

const Post = ({ element }) => {
    const { id, title } = element;

    return (

        <div className='border-2 border-amber-400 text-center  rounded-lg'>
            <h1 className='text-2xl font-semibold text-purple-600'>{id}</h1>
            <h1 className='text-2xl font-semibold text-purple-600'>{title}</h1>

            <NavLink to={`/posts/${id}`} className='text-2xl text-pink-600 p-3 rounded-3xl'>Show Post Details.</NavLink>
        </div>

    )
}

export default Post