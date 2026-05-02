import React from 'react'
import { Blog } from './Blog'

export const Blogs = ({data}) => {
  return (
    <>
        <div className='flex space-x-1 flex-wrap justify-around'>
            {
            data.map(element => <Blog element={element}/>)
        }
        </div>
    </>
  )
}
