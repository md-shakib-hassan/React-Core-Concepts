import React from 'react'
import { useLoaderData } from 'react-router'

const Learn = () => {
    const data = useLoaderData();
    console.log(data)
  return (
    <div>
        <p className='text-3xl font-bold'>this is from learn more page.</p>
    </div>
  )
}

export default Learn