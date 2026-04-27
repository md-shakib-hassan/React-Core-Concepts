import React, { useState } from 'react';
import './CounteriesBorder.css'
import './Button.css'

const CountryName = ({name,img,handleVisitedCountries,element}) => {

    const [visited,setVisited] = useState(false);
    

    const visitedBtn =()=>{
            setVisited(!visited);
            handleVisitedCountries(element.name.common);
            
    }
    return (
        <div className={`counterisBorder ${ visited && 'background'}`}>
            <h4>{name}</h4> <img src={img} alt="" />
            <button onClick={visitedBtn} className='btn'>
                {
                    visited? 'Visited' : "Visit"
                }
            </button>
        </div>
    );
};

export default CountryName;