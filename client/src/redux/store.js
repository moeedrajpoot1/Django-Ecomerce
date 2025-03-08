import { configureStore,combineReducers } from '@reduxjs/toolkit'
import product from './slices/product'
import cart from './slices/cart'

const reducer=combineReducers({
  product,
  cart,
})



const store=configureStore({reducer})

export default store