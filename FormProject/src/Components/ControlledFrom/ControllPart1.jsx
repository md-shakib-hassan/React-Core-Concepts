import React, { useState } from 'react'

const ControllPart1 = () => {

    const [password,setPassword] = useState();
    const [error, setError] = useState('')

    const handleControl = (e)=>{
            e.preventDefault();
    }

    const handleChange = (e)=>{
      console.log(e.target.value)
       
    }

    const handlePasswordChange =(e)=>{

      setPassword(e.target.value);
      if(e.target.value.length < 6){
        setError('Must Password more than 6');
      }else{
        setError('');
      }
    }

  return (
    <div>
          <h1>Fill this Form with Control.</h1>
            <form onSubmit={handleControl}  >
                <input className='bg-gray-200 p-3 rounded-lg '   name='name' type="text" placeholder='Enter your name: '  required />
                <br />
                <input className='bg-gray-200 p-3 my-3 rounded-lg ' name='email' type="password" placeholder='Enter your Email: ' onChange={handleChange} required  />
                <br />
                <input className='bg-gray-200 p-3 my-3 rounded-lg ' type="password" name="password" id="" onChange={handlePasswordChange} defaultValue={password} />
                <br />
                <input type="submit" value="Submit" className='bg-gray-200 p-3 mt-2 rounded-lg' />
                <p className='text-green-400'><small>{error}</small></p>
            </form>
    </div>
  )
}

export default ControllPart1