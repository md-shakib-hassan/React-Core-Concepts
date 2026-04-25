import './App.css'
import Counteries from './Counteries/Counteries'
import { Suspense } from 'react'


const allCountry = fetch('https://restcountries.com/v3.1/all?fields=name,flags')
   .then(response => response.json())

  //  console.log(allCountry);



function App() {
 

  return (
    <>
    <Suspense fallback={<h5>Loadding...</h5>}>
      <Counteries countryPromise = {allCountry} ></Counteries>
    </Suspense>
      
    </>
  )
}

export default App
