import React from 'react'
import { Blog } from './Blog'

export const Blogs = ({data,handleBookMark,handleReadBook}) => {
  return (
    <>
        <div className='flex space-x-1 flex-wrap justify-around'>
            {
            data.map(element => <Blog key={element.id} handleReadBook={handleReadBook} handleBookMark={handleBookMark} element={element}/>)
        }
        </div>
    </>
  )
}
