import React, { useState } from 'react'

import { FaBookmark } from "react-icons/fa";

export const Blog = ({ element,handleBookMark,handleReadBook }) => {
 
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm mt-10">
                <figure>
                    <img className='w-32 h-30 rounded-full'
                        src={element.image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{element.name}</h2>
                    
                    <button onClick={()=>{handleBookMark(element) }}><FaBookmark size={25} /></button>
                    </div>
                    <p>{element.short_description}</p>
                    <button onClick={ ()=>{handleReadBook(element.id)}} className='text-blue-500  '>Mark for Read</button>
                   
                   
                </div>
            </div>
        </div>
    )
}
