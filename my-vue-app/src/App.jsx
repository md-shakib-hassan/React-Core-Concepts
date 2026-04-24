import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './ToDo'
import Actors from './Actors'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)

  const actors =["SRK","Salam","tIGER"];

  const singers =[
    {id:1, name:"Tahsan", age:45},
    {id:2, name:"James", age:65},
    {id:3, name:"Oyshee", age:35}
  ];

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
          <Person></Person>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <Experience></Experience>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <DevopsSkill></DevopsSkill>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
             
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <Student name={"Shakib Hassan"} dept={"Software engineer"}> </Student>
      <Student name={"Hasib Hassan"} dept={"Nuclear engineer"}> </Student>

      <Developer position={"Tech Lead"} tech={"Devops"} ></Developer>

     <ToDo tech={"HTML"} duration={"3 weeks"} done={true}> </ToDo>

     <ToDo tech={"CSS"} duration={"4 weeks"} done={true}> </ToDo>
     
     <ToDo tech={"JS"} duration={"4 weeks"} done={false}> </ToDo>

    
     {
      actors.map(actor=> <Actors actor={actor}></Actors> )       
     }

     {
      singers.map(singer=> <Singer singers={singer}> </Singer>)
     }

     
    </>


  )
}

// here start our function written part.

const Person=()=> {
  return (
    <>
      <h2>Shakib Hassan</h2>
      <h1>software engineer</h1>
    </>

  )
}

const Experience = () => {
  const age = 2;
  return (
    <>
      <h4>html in {age} Experience</h4>
      <h4>CSS in {age} Experience</h4>
      <h5>TailwindCSS in {age} Experience</h5>
      <h4>JavaScript in {age} Experience</h4>
      <h4>React in {age} Experience</h4>
    </>
  )
}

const DevopsSkill = () => {
  const Experience = "beginner";
  return (
    <>
      <h4 class="text-blue-500 text-2xl font-bold">Docker ({Experience})</h4>
      <h4>Kubunatis ({Experience})</h4>
      <h4>Pycham ({Experience})</h4>
      <h4>Linux ({Experience})</h4>
    </>
  )
}

const Student=({name,dept})=>{
  return(
    <> 
    <div className='student'>
      <h5>Name: {name} </h5>
      <p>Dept: {dept}</p>
    </div>
    </>
  )
}

const Developer=({position,tech})=>{
  return(
    <>
    <div className='developer'>
      <h5>Role: {position} </h5>
      <p>Tech:{tech} </p>
    </div>
    </>
  )
}

export default App
