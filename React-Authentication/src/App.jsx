
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
      <section className='container mx-auto'>
        <Navbar></Navbar>

        <Outlet></Outlet>

       <Footer></Footer>
      </section>

      
    </>
  )
}

export default App
