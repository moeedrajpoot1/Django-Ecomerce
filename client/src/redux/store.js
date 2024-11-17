import { configureStore,combineReducers } from '@reduxjs/toolkit'
import product from './slices/product'


const reducer=combineReducers({
  product
})



const store=configureStore({reducer})

export default store