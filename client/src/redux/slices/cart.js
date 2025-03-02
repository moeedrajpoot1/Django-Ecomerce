
import { createSlice  } from '@reduxjs/toolkit'


const initialState = {
    error : null,
    loading : false,
    cart : [],
    subTotal : 0,
    shippingInfo : [],
    cartCount : 0,
    totalItems : 0,
}


const subTotal=(cart)=>{
    let total=0;
    total = cart.map(  (items)=> items.price * items.quantity  )

    return total


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


export default cartSlice.reducer;  //export reducer

export const cartSelector = (state) => state.cart 