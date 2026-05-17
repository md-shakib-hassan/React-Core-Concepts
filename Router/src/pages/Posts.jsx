import React from 'react'
import { useLoaderData } from 'react-router'
import Post from './Post';

const Posts = () => {

    const postData = useLoaderData();

    console.log(postData)
    return (
        <div>
            <h1 className='text-3xl font-bold '>here all post,{postData.length}</h1>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 '>
                {
                    postData.map(element => <Post element={element}></Post>)
                }
            </div>

        </div>
    )
}

export default Posts