import React from 'react'
import { sale_cal,addComma,rs_to_dollar } from '../functions/func'

const PriceComponents = ({product}) => {
  const new_price=sale_cal(product.price,product.onSale,product.discount)
  return (

    <>
      
      {product.onSale ? 
    <>
      <p className='text-3xl  text-orange-500  font-semibold leading-6 mr-2'>Rs. {new_price} 
      <small className=' font-semibold text-purple-500 ml-4'>
        Rs. {product.price}
        <br/>
        -{product.discount}%
      </small>
      
      
        </p>
      
    
    
    
    
    </>
     :<>
     
     
     
     <p className='text-3xl  text-orange-500  font-semibold'>{product.price}  </p>
     
     
     
     </> } </>
  )
}

export default PriceComponents
