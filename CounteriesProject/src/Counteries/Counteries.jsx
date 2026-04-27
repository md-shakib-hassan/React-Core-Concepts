import React, { use, useState } from 'react';
import CountryName from './CountryName';
import './GridCounteries.css'

const Counteries = ({countryPromise}) => {

    const data = use(countryPromise);
    const [visitedCounteries,setVisitedcounteries] = useState([]);

    const handleVisitedCountries=(name)=>{
        const newCountries = [...visitedCounteries,name];
        setVisitedcounteries(newCountries);
    }


    return (
        <>
        <h1>Travelling Multiple Counteries</h1>
        <h3>Visited Country:{visitedCounteries.length}</h3>
        <h4>Visited Countries List: </h4> 
        <ol>
            {
                visitedCounteries.map(element => <li>{element}</li>)
            }
            </ol>
        <div className='gridCounteries'>            
            {
                data.map(element => <CountryName handleVisitedCountries={handleVisitedCountries}  key={element.name.official} name ={element.name.common} img={element.flags.png} element={element}></CountryName> )
            }
                       
        </div>
        </>
        
    );
};

export default Counteries;