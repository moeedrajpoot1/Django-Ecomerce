
import { createSlice  } from '@reduxjs/toolkit'


const calculateSubTotal=(cart)=>{
    let total=0;
    total = cart.map( (items)=> total+=items.price * items.quantity )
 

    return total


}


const initialState = {
    error : null,
    loading : false,
    cartItems : JSON.parse(localStorage.getItem("cartitems"))?? [],
    subTotal : JSON.parse(calculateSubTotal(localStorage.getItem("cartitems"))),
    shippingInfo : JSON.parse(localStorage.getItem("shippingInfo"))?? [],
    cartCount : 0,
    totalItems : 0,
}




const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {

        setloading : (state)=>{
        state.loading = true

        }

    }
})

export const { setloading } = cartSlice.actions


export default cartSlice.reducer; 

export const cartSelector = (state) => state.cart 