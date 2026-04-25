import { use } from "react"
import UserDetails from "./UserDetails";

export default function Users({userFetch}){

    const data = use(userFetch);
   

    return(
        <>
        <h1>Users Number : {data.length} </h1>
        {
            data.map(element=> <UserDetails element={element} ></UserDetails>)
        }
        </>

    )
}