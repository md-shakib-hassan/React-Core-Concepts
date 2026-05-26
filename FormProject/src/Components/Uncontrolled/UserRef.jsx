import React, { useRef } from 'react'

const UserRef = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }
    
    return (
        <div>
            <h1>Fill this Form using UseRef.</h1>
            <form action="" onSubmit={handleSubmit}>
                <input className='bg-gray-200 p-3 rounded-lg ' ref={nameRef} name='name' type="text" placeholder='Enter your name: ' />
                <br />
                <input className='bg-gray-200 p-3 my-3 rounded-lg ' ref={emailRef} name='email' type="text" placeholder='Enter your Email: ' />
                <br />
                <input type="submit" value="Submit" className='bg-gray-200 p-3 mt-2 rounded-lg' />
            </form>
        </div>
    )
}

export default UserRef