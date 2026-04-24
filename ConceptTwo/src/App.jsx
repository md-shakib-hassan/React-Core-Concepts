import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Count from './Count'
import Batsman from './Batsman'

function App() {

  

  const btn=()=>{
    alert("Hello React!");
  }

  const sum =(num)=>{
    const number = num+10;
    alert(`sum is ${number}`);
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <button onClick={btn}>Click 1</button>
          <br />
          <button onClick={()=>{sum(5)}}>Click 2</button>
          <br />
          <button onClick={function(){
            alert("form inner evevnt?")
          }}>Click 3</button>
          <br />
          
          <Count></Count>
          
        </div>
        
      </section>

     

      <div className="ticks"></div>

      

      <div className="ticks"></div>
      <section id="spacer"></section>

      <Batsman></Batsman>
    </>
  )
}

export default App
