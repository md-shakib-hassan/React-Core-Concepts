import React from 'react';

function Section() {
    return (
        <>
         <div className='flex mt-10 justify-around'>
            <div className='w-[60%] '>
                <img className='rounded-sm' src="https://eccweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/02/26103848/Option-01-1.png" alt="" />
            </div>


            <div className='bg-gray-300 w-[30%] p-5 rounded-xl'>
                <h1 className='text-2xl font-semibold'>Reading Time: 5</h1>
                <h1 className='text-2xl font-semibold'>Book Mark: </h1>


            </div>

        </div>
        </>
       
    );
}

export default Section;