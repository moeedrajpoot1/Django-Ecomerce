import { createSlice } from '@reduxjs/toolkit';

const calculateSubTotal = (cart) => {
    if (!Array.isArray(cart)) return 0; // Ensure cart is an array

    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const initialCartItems = JSON.parse(localStorage.getItem("cartitems")) || [];

const initialState = {
    error: null,
    loading: false,
    cartItems: initialCartItems,
    subTotal: calculateSubTotal(initialCartItems), // Pass valid array
    shippingInfo: JSON.parse(localStorage.getItem("shippingInfo")) || {},
    cartCount: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setloading: (state) => {
            state.loading = true;
        },
    },
});

export const { setloading } = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state) => state.cart;
