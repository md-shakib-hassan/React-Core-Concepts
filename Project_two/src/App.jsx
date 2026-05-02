import './App.css'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { useEffect,useState } from 'react'
import data from '../public/data.json'

function App() {

   const [data, setData] = useState([]);

    useEffect(()=>{
      fetch('/data.json')
      .then(response=>response.json())
      .then(result =>setData(result))
    },[])

    console.log(data);


  return (
    <>
    
    <div className='md:container mx-auto md:mx-auto container'>
      <Navbar></Navbar>
      <h2 className='text-center'>Total Blogs:{data.posts.length}</h2>

      <Section></Section>
    </div>
    </>
    

    
     
    
  )
}

export default App
