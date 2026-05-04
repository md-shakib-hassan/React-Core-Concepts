import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'


import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('Data.json')
    .then(response => response.json())
    .then(result => setData(result));
  },[])


  return (
    <>
   
      <Navbar></Navbar>
      <Main data={data} ></Main>
      
    </>
  )
}

export default App
