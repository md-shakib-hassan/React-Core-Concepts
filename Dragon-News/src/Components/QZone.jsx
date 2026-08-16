import React from 'react'

const QZone = () => {
  return (
    <div className='flex-col bg-base-300 rounded-2xl'>
        <h1 className='mx-5 pt-5 font-semibold'>Q-Zone</h1>
       <div className='justify-items-center space-y-10 py-10'> 
         <div className='mx-auto'><img src="/src/assets/swimming.png" alt="" /></div>
        <div><img src="/src/assets/playground.png" alt="" /></div>
        <div><img src="/src/assets/class.png" alt="" /></div>
       </div>

    </div>
  )
}

export default QZone