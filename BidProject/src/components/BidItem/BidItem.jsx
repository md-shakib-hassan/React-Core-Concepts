import React from 'react'
import { ItemsList } from '../itemList/ItemsList'

export const BidItem = ({data}) => {
  return (
    <>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>

              </th>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(element=> <ItemsList element={element}> </ItemsList>)
            }
                      
          </tbody>
         

        </table>
      </div>
    </>
  )
}
