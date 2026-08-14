import { format } from 'date-fns'
import React from 'react'

const Header = () => {
  return (
    <div className='mt-5'>
        
        <img src="/src/assets/logo.png" className='mx-auto sm:mx-auto md:mx-auto' alt="" />
        <p className=' text-center md:text-center sm:text-center my-3 text-accent'>Journalism Without Fear or Favour</p>
        <p className='font-semibold text-center text-accent'>{format (new Date(),"EEEE, MMMM, MM, yyy")}</p>
    </div>
  )
}

export default Header