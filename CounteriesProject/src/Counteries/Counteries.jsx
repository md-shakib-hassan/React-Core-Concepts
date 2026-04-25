import React, { use } from 'react';
import CountryName from './CountryName';

const Counteries = ({countryPromise}) => {

    const data = use(countryPromise);

    return (
        <div>
            <h1>Travelling Multiple Counteries</h1>
            {
                data.map(element => <CountryName key={element.name.official} name ={element.name.common} img={element.flags.png}></CountryName> )
            }
            <p></p>
            
        </div>
    );
};

export default Counteries;