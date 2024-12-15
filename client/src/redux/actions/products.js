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
        console.log(response.data,'responseeeeeeeeeeeeeeeeee dataaaaaaaaaaaaaa'
        )
        dispatch(setProducts(response.data)); // Ensure response data structure is correct
        
      } catch (error) {
        dispatch(error.message);
      }
}

export const fetchProduct = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}`);
    console.log('responseeee',response)
    dispatch(setProduct(response.data));
  } catch (error) {
    dispatch(setError(error.message)); // Use a proper error-handling action
  }
};
