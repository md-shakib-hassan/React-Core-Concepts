import React from 'react'
import { Link } from 'react-router';

const Users = ({ data }) => {

    const {id, name, username, email } = data;


    return (

        <div className='border-amber-300 border-2 border-solid rounded-4xl p-2 text-center mt-2'>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <p>{username}</p>
            <p>{email}</p>
           <button> <Link to={`/users/${id}`}>Show User Details</Link> </button> 
        </div>

    )
}

export default Users