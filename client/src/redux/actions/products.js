import { useState } from 'react';
import {
    setLoading,
    setError,
    setProduct,
    setProducts
} from '../slices/product'
import axios from 'axios'


export const fetchProducts=()=> async(dispatch)=>{
    dispatch(setLoading())
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/products"); // Corrected URL
        dispatch(setProducts(response.data)); // Ensure response data structure is correct
        
      } catch (error) {
        dispatch(error.message);
      }
}