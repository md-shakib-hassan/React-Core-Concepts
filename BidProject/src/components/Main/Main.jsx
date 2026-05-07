import React from 'react'

import { BidItem } from '../BidItem/BidItem'
import { Item } from '../Item/Item'

export const Main = () => {

   
  return (

    <>
        <div className='bg-[#EBF0F5]'>
         <div className='pt-15 pl-8'>
           <h1 className='font-semibold text-xl'>Active Auctions</h1>
          <p className='w-1/2'>Discover and bid on extraordinary items</p>
         </div>

           <div className='md:flex flex justify-around  '>

      

        {/* showcase of bid item */}
        <div className='w-[70%] bg-white my-10 rounded-xl'>
          <BidItem></BidItem>
              
        </div>

        {/* here for selected bid item */}
        <div className='my-10'>
          <Item></Item>
        </div>

      </div>
        </div>
      
    
    
    </>
   
  )
}
