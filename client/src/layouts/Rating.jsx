import React from 'react'
import { FaStar } from "react-icons/fa6";

const Rating = ({product}) => {
  return (
    <div className='flex items-center'>
       { [...Array(5)].map((_,index)=>(
<svg key={index} className={`h-4 w-5  fill-current ${index < product.rating ? 'text-yellow-500':"text-gray-400"}`} viewBox='0 0 20 0' fill='currentColor' >
<FaStar />
</svg>
        ))}
        
      
    </div>
  )
}

export default Rating
