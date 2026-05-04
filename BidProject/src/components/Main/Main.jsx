import React from 'react'
import { Item } from '../Item/Item'

export const Main = ({data}) => {

   
  return (
    <div className='grid grid-cols-3 w-[60%] gap-10'>
        {
            data.map(element => <Item element={element}></Item> )
        }
        
    </div>
  )
}
