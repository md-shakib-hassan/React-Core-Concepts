import React, { useContext } from 'react'
import { AssetContext } from './Family'

const MySelf = () => {
  const asset = useContext(AssetContext);
  return (
    <div className='border-fuchsia-600 border-2 rounded-lg '>
    <h2 className='text-center text-2xl font-semibold'>Alien Shakib</h2>
    <h3>Asset: {asset}</h3>
    </div>
  )
}

export default MySelf