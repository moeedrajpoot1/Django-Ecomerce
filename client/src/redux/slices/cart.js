import { createSlice } from '@reduxjs/toolkit'

const CalculateSubTotal = (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

const UpdateLocalStorage = (cart, ShippingDeatails, subTotal) => {
    localStorage.setItem('cartitems', JSON.stringify(cart));
    localStorage.setItem('Shipping', JSON.stringify(ShippingDeatails));
    localStorage.setItem('SubTotal', JSON.stringify(subTotal));
}

const cartItems = JSON.parse(localStorage.getItem('cartitems') || "[]");
const shippingDetails = JSON.parse(localStorage.getItem('Shipping') || "{}");

const initialState = {
    error: null,
    loading: false,
    cartItems: cartItems,
    shippingDetails: shippingDetails,
    subTotal: cartItems.length > 0 ? CalculateSubTotal(cartItems) : 0,
    shippingInfo: [],
    cartCount: 0,
    totalItems: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setloading: (state) => {
            state.loading = true;
        }
    }
})

export const { setloading } = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state) => state.cart;
