import React, { useContext } from 'react'
import { AssetContext } from './Family';
import Abbu from './Abbu';
import Uncle from './Uncle';
import Aunty from './Aunty';

const Grandpa = () => {

  const asset = useContext(AssetContext);
  console.log(asset)
  return (
    <>
      <h3 className='text-center my-5 text-2xl font-semibold'>Grandpa</h3>
      <div className='border-fuchsia-600 border-2 gap-2 rounded-lg h-50 grid md:grid md:grid-cols-3 lg:grid-cols-3 justify-center container mx-auto '>

        <Abbu></Abbu>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </>

  )
}

export default Grandpa