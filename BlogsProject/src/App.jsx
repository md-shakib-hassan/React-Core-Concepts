import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Blogs } from './components/Blogs'

function App() {
  const [data,setData]=useState([])
  const [bookMark,setbookMark] = useState([]);

  useEffect(()=>{
      fetch('Data.json')
      .then(response => response.json())
      .then(result => setData(result))
  },[])

    const handleBookMark =(des)=>{
        const allData = [...bookMark,des]
        setbookMark(allData);
       
    }

    const handleReadBook =(id)=>{
      console.log(id)
        const remainingBook= bookMark.filter(element => element.id !==id)
        setbookMark(remainingBook)
    }

  return (
    <>
    <div className='md:container md:mx-auto container'>
       <Navbar></Navbar>

      <div className='flex text-center justify-around mt-10'>
         <h1 className="text-3xl font-bold">Total Blogs: {data.length}</h1>
       <h2 className="text-3xl font-bold">Blogs:</h2>
      </div>

      <div className='flex mt-10 justify-around'>
            <div className='w-[60%] '>
                <img className='rounded-sm' src="https://eccweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/02/26103848/Option-01-1.png" alt="" />
            </div>

              <div className='bg-gray-300 w-[30%] p-5 rounded-xl'>
                <h1 className='text-2xl font-semibold'>Reading Book:Infinity </h1>
                <h1 className='text-2xl font-semibold'>Book Mark:{bookMark.length} </h1>
                <div className='mt-2'>
                    {
                       bookMark.map(element => <p className='bg-amber-50 rounded-xl p-3 my-2'>{element.short_description}</p>) 
                    }
                </div>

            </div>

        </div>

      <Blogs handleReadBook={handleReadBook} handleBookMark={handleBookMark} data={data}></Blogs>

    </div>
     
      
    </>
  )
}

export default App
