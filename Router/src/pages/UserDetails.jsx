import React from 'react'
import { useLoaderData } from 'react-router'

const UserDetails = () => {

  const userData = useLoaderData();

  return (
    <div>
      <div className='border-s-olive-500 border-2 rounded-4xl text-center p-10'>
        <h1 className='text-2xl text-amber-300 font-semibold'>User Details</h1>
        <h2>{userData.id}</h2>
        <h2>{userData.website}</h2>
        <h2>{userData.phone}</h2>
      </div>
    </div>
  )
}

export default UserDetails