import React from 'react'
import '../css/custom.css'
import PriceComponents from './PriceComponents'
import { sale_cal } from '../functions/func'
import {Link }from 'react-router-dom'
import Rating from './Rating'
const ProductCard = ({product}) => {
  console.log(product.title,"producttttttttttttttttttttttttt")
  return (
    <div className=' rounded-lg  bg-black hover:bg-purple-800 overflow-hidden   transition duration-300 ease-in-out mx-auto '>

      <div className=' relative   overflow-hidden myCard'>
<img src={product.image} className=' object-cover object-center w-full h-full  transition-transform  duration-500 ease-in-out
 transform  hover:scale-110' />

      </div>
      
<div className='p-4'>
  <h1 className=' text-white text-center title text-xl transition duration-500 hover:text-orange-500'>
    {product.name}
    
     </h1>
     <div className=' flex justify-between text-gray-400 font-semibold text-base mt-1'>
<span className='transition duration-500 hover:text-orange-500'>
  {product.brand}
</span>
<span className=' transition duration-500 hover:text-orange-500 '>
{product.category}
</span>
     </div>
     <div className=' flex items-center justify-between mt-3'>
<span><Rating product={product} /></span>
<div>
  {product.onSale ? <div className=' flex-col items-center  justify-between text-xl'>
    <p className='mb-1 font-normal text-red-500 dark:text-gray-100'>
      Rs: {sale_cal(product.price,product.discount,product.onSale)}
    </p>
  

  </div>:<p className='mb-3 font-normal  text-red-500 dark:text-gray-100'>
RS: {product.price}
    
    
    
    </p>}
</div>
     </div>
<Link to={`/product/${product._id}`}>
<button className='w-full bg-purple-400 hover:bg-black px-3 py-4 rounded duration-300   transition  ease-in-out text-white'>
View Details 

</button>
</Link>


</div>



<PriceComponents product={product} />
      <img className='product_image' src={product.image} alt='dummy'/>
    </div>
  )
}

export default ProductCard