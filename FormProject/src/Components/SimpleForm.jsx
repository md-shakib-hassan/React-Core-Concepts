import React from 'react'

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    return (
        <div>
            <h1>Fill this Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <input className='bg-gray-200 p-3 rounded-lg ' name='name' type="text" placeholder='Enter your name: ' />
                <br />
                <input className='bg-gray-200 p-3 my-3 rounded-lg ' name='email' type="text" placeholder='Enter your Email: ' />
                <br />
                <input type="submit" value="Submit" className='bg-gray-200 p-3 mt-2 rounded-lg' />
            </form>
        </div>
    )
}

export default SimpleForm