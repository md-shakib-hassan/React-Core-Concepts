import { useState } from "react";

export default function Count() {
    
    // function useState(initialValue) {
    //     let state = initialValue;

    //     function setState(newValue) {
    //         state = newValue;
    //         // trigger re-render
    //     }

    //     return [state, setState];
    // }

    const [count, setCount] = useState(0)

    const addHandle = () => {

        const newValue = count + 1;
        setCount(newValue);
    }

    return (
        <div>
            <h4>Count:{count}</h4>
            <button onClick={addHandle}>Add</button>
        </div>
    )
}