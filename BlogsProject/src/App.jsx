import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { useState } from 'react'
import { Blogs } from './components/Blogs'

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
      fetch('Data.json')
      .then(response => response.json())
      .then(result => setData(result))
  },[])

  return (
    <>
    <div className='md:container md:mx-auto container'>
       <Navbar></Navbar>
      <div className='flex text-center justify-around mt-10'>
         <h1 className="text-3xl font-bold">Total Blogs:{data.length}</h1>
       <h2 className="text-3xl font-bold">Blogs:</h2>
      </div>

      <Section></Section>
      <Blogs data={data}></Blogs>

    </div>
     
      
    </>
  )
}

export default App
