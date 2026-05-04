import React from 'react'
import { Item } from '../Item/Item'
import { BidItem } from '../BidItem/BidItem'

export const Main = ({data}) => {

   
  return (

    <>
    <div className='flex space-x-4'>

         <div className='grid grid-cols-3 w-[60%] gap-10'>
        {
            data.map(element => <Item element={element}></Item> )
        }
        
    </div>

    <div>
        <BidItem></BidItem>

    </div>

    </div>
    
    </>
   
  )
}
