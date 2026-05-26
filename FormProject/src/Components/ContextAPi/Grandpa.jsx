import React, { useContext } from 'react'
import { AssetContext } from './Family';

const Grandpa = () => {
   
    const asset = useContext(AssetContext);
    console.log(asset)
  return (
    <div>
        <h1>here asset: {asset}</h1>
    </div>
  )
}

export default Grandpa