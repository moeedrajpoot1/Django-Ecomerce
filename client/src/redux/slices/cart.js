import { createSlice } from '@reduxjs/toolkit'
import { UpdateLocalStorage, CalculateSubTotal } from '../../functions/cartFunc'
import { json } from 'react-router-dom';





const cartItems = JSON.parse(localStorage.getItem('cartitems') || "[]");
// const shippingDetails = JSON.parse(localStorage.getItem('Shipping') || "{}");

export const initialState = {
    error: null,
    loading: false,
    cartItems:JSON.parse(localStorage.getItem('cartItems') || "[]"),
    shipping:JSON.parse(localStorage.getItem('shipping')) ?? Number(299.9),
    subtotal: localStorage.getItem('cartItems') ? CalculateSubTotal(JSON.parse(localStorage.getItem('cartitems'))): 0,
    // shippingDetails: shippingDetails,
   
    
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setloading: (state) => {
            state.loading = true;
        },
        setError : (state , {payload}) => {
            state.error = payload;
        },
        addCartItems: (state, { payload }) => {
            const existingItem = state.cartItems.find( item => item.id === payload.id);
            
            if(existingItem){
                state.cartItems=  state.cartItems.map( item => item.id === existingItem.id ? payload : item);
            }
            else{
                state.cartItems = [...state.cartItems , payload];
            }
            state.loading = false,
            state.error = null,
            UpdateLocalStorage(state.cartItems)
            state.subtotal = CalculateSubTotal(state.cartItems)
        },
        removeFromCartItem : (state , {payload}) => {
            state.cartItems = [...state.cartItems].filter(item => item.id !== payload);
            state.loading = false,
            state.error = null,
            UpdateLocalStorage(state.cartItems)
            state.subtotal = CalculateSubTotal(state.cartItems)
        },
        setShipping : (state , {payload}) => {
            state.loading = false
            state.shipping = payload;
            localStorage.setItem("shipping",JSON.stringify(payload))


        },
        clearCart : (state) => {
            localStorage.removeItem("cartItems")
            localStorage.removeItem("shipping")
            localStorage.removeItem("subtotal")
            state.cartItems = [];
            state.shipping = Number(299.9)
            state.subtotal = 0;
            state.loading = false,
            state.error = null


        },

    }
})

export const {setloading,setError,addCartItems,removeFromCartItem,setShipping,clearCart} = cartSlice.actions;

export default cartSlice.reducer;  
