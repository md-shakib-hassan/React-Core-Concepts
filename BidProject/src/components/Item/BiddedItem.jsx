import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

export const BiddedItem = ({ element }) => {

    const [amount,setAmount]=useState(0);

    const handleAmount = (bidAmount)=>{
        const newAmount = amount+bidAmount
        setAmount(newAmount)
        console.log(bidAmount)
    }

    console.log(amount)

    return (
        <>
            <li className="list-row">
                <div><img className="size-10 rounded-box" src={element.image} /></div>
                <div>
                    <div>{element.title}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">${element.currentBidPrice}</div>
                </div>

                <button onClick={()=>{handleAmount(element.currentBidPrice)}} className="btn btn-square btn-ghost">
                    <IoClose />
                </button>
            </li>
        </>
    )
}
