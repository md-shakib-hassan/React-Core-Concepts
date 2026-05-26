import { useState } from "react";

const inputField =(defaultValue)=>{

        const [value, setValue] = useState(defaultValue);


        const handleChange =(event)=>{
            setValue(event.target.value);
        }

        return [value,handleChange];

}
export default inputField;