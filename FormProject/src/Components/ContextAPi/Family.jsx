import React, { useState } from 'react'
import { createContext } from 'react'
import Grandpa from './Grandpa';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);




const Family = () => {
    const asset ='diamond';

    const [money,setMoney]=useState(0);

  return (
    <>
    <h3 className='text-center text-2xl font-semibold'>Family</h3>
    <div>
        <AssetContext value={asset,[money,setMoney]}>
            <Grandpa></Grandpa>
        </AssetContext>
       
    </div>
    
    </>
    
  )
}

export default Family