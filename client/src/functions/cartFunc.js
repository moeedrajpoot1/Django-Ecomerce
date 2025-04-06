const CalculateSubTotal = (CartData) => {
    if (!Array.isArray(CartData)) return 0; // Ensure CartData is an array

    return CartData.reduce((subTotal, item) => subTotal + item.qty * item.price, 0);
};

const UpdateLocalStorage = (CartData) => {
    if (!Array.isArray(CartData)) return; // Ensure CartData is valid before updating storage

    localStorage.setItem('cartItems', JSON.stringify(CartData));
    localStorage.setItem('subTotal', CalculateSubTotal(CartData)); // Pass the array, not JSON string
};

export { UpdateLocalStorage, CalculateSubTotal };

