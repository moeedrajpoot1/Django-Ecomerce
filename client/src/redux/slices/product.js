import { createSlice } from '@reduxjs/toolkit'
// 3 chizy mangta ha initial state 
//reducer
// initial satate
// slice ka name


const initialState={

    products:[],
    error:null,
    product:null,
    loading:false,
    pagination:{},
    reviewed:false,
    favorites: JSON.parse(localStorage.getItem('favorites'))?? [],
    favoritesToggle:false
}

// initial state ko pass karwna slice k andr

// slice ka nam
const ProductSlice=createSlice({
   name:"products",
   initialState,
   reducers:{
    /// is k andr action creators
    setLoading:(state)=>{
          state.loading=true;

    },
    setProducts:(state,{payload})=>{
        state.loading=false;
        state.products=payload;
        state.error=null

    },
    setProduct:(state,{payload})=>{
        state.loading=false
        state.product=payload
        state.error=null
    },
    setError:(state,{payload})=>{
        state.loading=false,
        state.error=payload
    },
    setFavorites:(state,{payload})=>{
        state.favorites=payload
        
    },
    setFavoritesToggle:(state,{payload})=>{
        state.favorites=payload
        
    },




   }


})

export const {
setError,
setLoading,
setProduct,
setProducts,
setFavorites,
setFavoritesToggle
}=ProductSlice.actions


export default ProductSlice.reducer