import React, { useState } from 'react'

const ControllPart1 = () => {

    const [password,setPassword] = useState();

    const handleControl = (e)=>{
            e.preventDefault();
            console.log(e.target.name.value);
    }

    const handleChange = (e)=>{
      console.log(e.target.value)
    }
  return (
    <div>
          <h1>Fill this Form with Control.</h1>
            <form onSubmit={handleControl}  >
                <input className='bg-gray-200 p-3 rounded-lg '   name='name' type="text" placeholder='Enter your name: '  required />
                <br />
                <input className='bg-gray-200 p-3 my-3 rounded-lg ' name='email' type="password" placeholder='Enter your Email: ' onChange={handleChange} required defaultValue={password} />
                <br />
                <input type="submit" value="Submit" className='bg-gray-200 p-3 mt-2 rounded-lg' />
            </form>
    </div>
  )
}

export default ControllPart1