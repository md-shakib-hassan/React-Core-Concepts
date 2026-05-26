import React from 'react'

const ProductTable = ({ products }) => {

    return (
        <div>
            <h1>Product length:{products.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                  
                    <thead >
                        <tr className='mx-2'>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product,index)=>
                         <tr>
                            <th>{index+1}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                             )
          
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTable