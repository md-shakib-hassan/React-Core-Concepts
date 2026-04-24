
import { useState } from "react";

export default function Batsman(){

    const [runs,setRuns] = useState(0);

    const [fours,setFours] = useState(0);

    const [sixes,setSixes] = useState(0);


    const handleSingle=()=>{
        const update = runs+1;
        setRuns(update);
    }

    const handleTwo=()=>{
        const update = runs+2;
        setRuns(update);
    }

    const handleFour=()=>{

        const update = runs+4;
        const foursUpdate = fours+1;
        setFours(foursUpdate);
        setRuns(update);
    }

    const handleSix=()=>{
        const update = runs+6;
        const sixesUpdate = sixes+1;
        setSixes(sixesUpdate);
        setRuns(update);
    }



    return(
        <div>
            <h3>Batsman: Shakib AL Hasan</h3>
            {
            runs>=50 ? `congratulations you score ${runs}`: ""
           }
            <p><small>fours:{fours}</small> <small>sixs:{sixes}</small></p>
            <h1>Score:{runs}</h1>
           

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleTwo}>Two</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

        </div>
    )
}