import React from 'react'
import { createContext } from 'react'
import Grandpa from './Grandpa';

export const AssetContext = createContext('');



const Family = () => {
    const asset ='diamond';
  return (
    <div>
         <h1>Here All Asset for family member and relative.</h1>
        <AssetContext value={asset}>
            <Grandpa></Grandpa>
        </AssetContext>
       
    </div>
  )
}

export default Family