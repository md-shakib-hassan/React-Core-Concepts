import React from 'react'
import inputField from './Customhook'

const HookForm = () => {

        const [name,setName]=inputField('');
        const [email,setEmail]=inputField('');
           
        const handleSubmit =(event)=>{
            event.preventDefault();
            console.log("submit",name,email);
        }

    return (
        <div>
            <h1>Fill this Form Using Custom Hook.</h1>
            <form onSubmit={handleSubmit} >
                <input className='bg-gray-200 p-3 rounded-lg ' defaultValue={name} onChange={setName} name='name' type="text" placeholder='Enter your name: ' />
                <br />
                <input className='bg-gray-200 p-3 my-3 rounded-lg ' defaultValue={email} onChange={setEmail} name='email' type="text" placeholder='Enter your Email: ' />
                <br />
                <input type="submit" value="Submit" className='bg-gray-200 p-3 mt-2 rounded-lg' />
            </form>
        </div>
    )
}

export default HookForm