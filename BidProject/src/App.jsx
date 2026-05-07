import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'


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
      <Banner></Banner>

     
      <Main ></Main>

      <Footer></Footer>
      
    </>
  )
}

export default App
