import { configureStore,combineReducers } from '@reduxjs/toolkit'
import ProductSlice from './slices/ProductSlice'


const reducer=combineReducers({
  product=ProductSlice
})



const store=configureStore({reducer})

export default store