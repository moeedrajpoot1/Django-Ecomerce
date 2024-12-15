import React from 'react'
import '../css/custom.css'
import PriceComponents from './PriceComponents'

const ProductCard = ({product}) => {
  console.log(product.title,"producttttttttttttttttttttttttt")
  return (
    <div className=' rounded-lg  bg-black hover:bg-purple-800 overflow-hidden   transition duration-300 ease-in-out mx-auto '>

      <div className=' relative   overflow-hidden myCard'>
<img src={product.image} className=' object-cover object-center w-full h-full  transition-transform  duration-500 ease-in-out
 transform  hover:scale-110' />

      </div>
      
<div className='p-4'>
  <h1 className=' text-white text-center title text-lg transition duration-500 hover:text-orange-500'>
    {product.name}
    
     </h1>

</div>



<PriceComponents product={product} />
      <img className='product_image' src={product.image} alt='dummy'/>
    </div>
  )
}

export default ProductCard
