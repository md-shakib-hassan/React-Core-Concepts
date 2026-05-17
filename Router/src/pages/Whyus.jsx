import React, { use } from 'react'

const Whyus = ({dataPromise}) => {
    const data = use(dataPromise);
    // console.log(data);
  return (
    <div>
        <p className='text-3xl font-bold'>
            from Why us pages.
        </p>
    </div>
  )
}

export default Whyus