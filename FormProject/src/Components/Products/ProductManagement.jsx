import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'

const ProductManagement = () => {

    const [products, setProducts] = useState([]);

    const handleProduct=(product)=>{
        const newProduct = [...products,product];
        setProducts(newProduct);
    }
  return (
    <div>
        <ProductForm handleProduct={handleProduct}></ProductForm>
        <ProductTable products={products}></ProductTable>
    </div>
  )
}

export default ProductManagement