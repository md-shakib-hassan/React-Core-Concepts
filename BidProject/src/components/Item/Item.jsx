import React from 'react'

export const Item = ({element}) => {
  return (
   
       <div className='mt-10'>
     
            <img  className='h-40 w-50 ' src={element.image} alt="" />
       
         <div className='mt-10'>
            <h2 className='font-bold text-3xl'>{element.title}</h2>
        <p className='w-80px font-medium text-xl'>{element.description}</p>
        <h3 className='font-semibold text-3xl '>BidPrice:{element.currentBidPrice}</h3>
        <h4 className='font-semibold'> BidCount:{element.bidsCount}</h4>

        
         </div>
       </div>

  )
}
