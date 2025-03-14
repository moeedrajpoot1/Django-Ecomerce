
import { createSlice  } from '@reduxjs/toolkit'


const CalculateSubTotal=(cart)=>{
    let total=0;
    total = cart.map(  (items)=> (items.price * items.quantity)  )

    return total


}

const UpdateLocalStorage = (cart,ShippingDeatails,subTotal) => {
    localStorage.setItem('cartitems', JSON.stringify(cart));
    localStorage.setItem('Shipping', JSON.stringify(ShippingDeatails))
    localStorage.setItem('SubTotal', JSON.stringify(subTotal))
}




const initialState = {
    error : null,
    loading : false,
    cartItems : localStorage.getItem(JSON.parse('cartitems')) ?? [],
    shippingDetails : localStorage.getItem(JSON.parse('Shipping')) ?? Number(300),
    subTotal : localStorage.getItem(JSON.parse('cartitems')) ? 
    CalculateSubTotal()
    : 0,
    subTotal : 0,
    shippingInfo : [],
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


export default cartSlice.reducer;  //export reducer

export const cartSelector = (state) => state.cart 
