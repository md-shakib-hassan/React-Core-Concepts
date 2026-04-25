import { use } from "react"

export default function Products({productPromise}){

    const data = use(productPromise)
    return(
        <>
        <h1>Product Number:{data.length} </h1>
        </>
    )
}