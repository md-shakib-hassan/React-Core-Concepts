import React, { useContext } from 'react'
import { AssetContext } from './Family'

const Uncle = () => {
  const { money, setMoney } = useContext(AssetContext);

  return (
    <div className='border-fuchsia-600 border-2 rounded-lg h-50'>
      <h3 className='text-center text-2xl font-semibold'>Uncle</h3>
      <button className='bg-blue-400 rounded-3xl p-2 ' onClick={() => { setMoney(money - 250) }}>Need Money</button>
    </div>
  )
}

export default Uncle