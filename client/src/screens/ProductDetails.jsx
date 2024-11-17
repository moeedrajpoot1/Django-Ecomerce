import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
const ProductDetails = () => {
  const {id} = useParams()
  const [product,setProduct]=useState({})
  return (
    <div>
      
    </div>
  )
}

export default ProductDetails

