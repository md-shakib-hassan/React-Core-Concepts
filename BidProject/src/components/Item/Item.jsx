import React from 'react'

import { FaRegHeart } from "react-icons/fa";
import { BiddedItem } from './BiddedItem';



export const Item = ({ bidItemList,amount,handleDeleteBidItem  }) => {


  return (

    <>
      <ul className="list bg-base-100 rounded-box shadow-md rounded-xl ">

        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex"><FaRegHeart className='items-center justify-items-center' /><span className='text-lg font-medium text-black'>Favorite Items</span></li>

        {
          bidItemList.map(element => <BiddedItem key={element.id} element={element} handleDeleteBidItem ={handleDeleteBidItem }> </BiddedItem>)
        }


        <h1 className='ml-3 font-semibold text-lg'>Total Bid Amount:${amount}.00</h1>

      </ul>

    </>

  )
}
