import React from 'react'

const ActionForm = () => {

     const handleSubmit = (formData) => {
        console.log(formData.get('name')); 
        console.log(formData.get('email')); 
    }

  return (
    <div>
         <h1>Fill this Form with Action.</h1>
            <form action={handleSubmit} >
                <input className='bg-gray-200 p-3 rounded-lg '  name='name' type="text" placeholder='Enter your name: ' />
                <br />
                <input className='bg-gray-200 p-3 my-3 rounded-lg ' name='email' type="text" placeholder='Enter your Email: ' />
                <br />
                <input type="submit" value="Submit" className='bg-gray-200 p-3 mt-2 rounded-lg' />
            </form>
    </div>
  )
}

export default ActionForm