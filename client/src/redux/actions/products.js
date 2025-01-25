import { useState } from 'react';
import {
    setLoading,
    setError,
    setProduct,
    setProducts,
    setFavorites,
setFavoritesToggle
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

export const AddToFavorites=(id)=>async(dispatch,getState)=>{
const {
  product:{
    favorites
  }
}=getState()

const newFavorites=[...favorites,id]
localStorage.setItem("favorites",JSON.stringify(newFavorites))
dispatch(setFavorites(newFavorites))
}

export const RemoveFavorites=(id)=>async(dispatch,getState)=>{
  const {
    product:{
      favorites
    }
  }=getState()
  
  const newFavorites=favorites.filter((favoritesId)=> favoritesId !=id )
  localStorage.setItem("favorites",JSON.stringify(newFavorites))
  dispatch(setFavorites(newFavorites))
  }

  
  
  
export const favoritesToggled=(toggle)=>async(dispatch,getState)=>{
const {
  product:{
   products, favorites
  }
}=getState()

if(toggle){
  const filteredProducts=products.filter((product)=>favorites.includes(product.id)
  )
  dispatch(setFavoritesToggle(toggle))
  dispatch(setProducts(filteredProducts))
}else{
  dispatch(setFavoritesToggle(false))
  dispatch(fetchProducts())
}


  }