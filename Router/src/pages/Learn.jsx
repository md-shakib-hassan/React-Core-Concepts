import React from 'react'
import { useLoaderData } from 'react-router'
import Users from './Users';

const Learn = () => {
    const data = useLoaderData();
   
  return (
    <>
   <div>
        <p className='text-3xl font-bold'>
            from Why us pages.
        </p>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-3 gap-2 space-y-1'>
      {
        data.map(element => <Users key={element.id} data={element}></Users>)
      }
    </div>
    </>
   
  )
}

export default Learn