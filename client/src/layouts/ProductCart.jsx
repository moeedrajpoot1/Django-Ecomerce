import React from 'react'
import '../css/custom.css'
const ProductCart = ({product}) => {
  return (
    <div className='w-[35%] text-slate-50 bg-slate-500 p-4 mt-[20px] '>
      <h1 className=' text-2xl text-purple-500'>Title: {product.name}</h1>
      <p>SubTitle: {product.price} </p>
      <img className='product_image' src={product.image} alt='dummy'/>
    </div>
  )
}

export default ProductCart
