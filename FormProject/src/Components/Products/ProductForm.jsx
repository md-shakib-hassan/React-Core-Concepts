import React from 'react'

const ProductForm = ({handleProduct}) => {

    const handleSubmit =(event)=>{
        event.preventDefault();

        const name = event.target.productName.value;
        const price = event.target.productPrice.value;
        const quantity = event.target.productQuantity.value;

        const productDetails ={
            name,
            price,
            quantity
        }
        // console.log(productDetails);
        handleProduct(productDetails);
    }
    return (
        <div>
            <h1>Form for Product.</h1>
            <form onSubmit={handleSubmit} >
                <input className=' p-2 my-2 border-2 border-white  rounded-lg  ' type="text" name="productName" id="" />
                <br />
                <input className=' p-2 my-2 border-2 border-white   rounded-lg ' type="text" name="productPrice" id="" />
                <br />
                <input className=' p-2 my-2 border-2 border-white  rounded-lg ' type="number" name="productQuantity" id="" />

                <br />
                <input type="submit" value="Submit" className=' rounded-lg px-3 py-2 bg-blue-500 text-white' />
            </form>
        </div>
    )
}

export default ProductForm