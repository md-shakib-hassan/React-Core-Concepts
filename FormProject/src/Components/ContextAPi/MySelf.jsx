import React, { useContext } from 'react'
import { AssetContext} from './Family'

const MySelf = () => {
  const {asset,money,setMoney} = useContext(AssetContext);
  
  return (
    <div className='border-fuchsia-600 border-2 rounded-lg '>
    <h2 className='text-center text-2xl font-semibold'>Alien Shakib</h2>
    <h3>Asset: {asset}</h3>
    <button className='bg-blue-400 rounded-3xl p-2 ' onClick={()=>{setMoney(money+500)}}>Add Money</button>
    </div>
  )
}

export default MySelf