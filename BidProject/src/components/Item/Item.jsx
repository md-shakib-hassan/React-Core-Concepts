import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";



export const Item = () => {
  return (
   
      <>
      <ul className="list bg-base-100 rounded-box shadow-md rounded-xl">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex"><FaRegHeart className='items-center justify-items-center' /><span className='text-lg font-medium text-black'>Favorite Items</span></li>
  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div>
      <div>Dio Lupa</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    
    <button className="btn btn-square btn-ghost">
      <IoClose />
    </button>
  </li>
  
  
  <h1 className='ml-3 font-semibold text-lg'>Total Bid:</h1>
  
</ul>
      
      </>

  )
}
