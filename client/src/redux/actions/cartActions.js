import {setloading,setError,addCartItems,removeFromCartItem,setShipping,clearCart} from '../slices/cart'
import axios from 'axios'
import apis from "../../apis";



export const addToCart=(id,qty)=> async(dispatch)=>{
    dispatch(setloading())
try {
    console.log("quantity",qty)
    console.log("apiii",apis)
    
    const {data} = await axios.get(`${apis[1]}/${id}`)
   console.log("dataaaaa",data)
    const itemsInCart = {
        id:data.id,
        name:data.name,
        price:data.price,
        image:data.image,
        qty,
    }
    console.log("items in carttt",itemsInCart)
    dispatch(addCartItems(itemsInCart))


} catch (error) {
    dispatch(setError(error.message))
}

}


export const removeFromCart=(id)=> async(dispatch)=>{
    dispatch(setloading())
    dispatch(removeFromCartItem(id))
}



export const emptyCart=(id)=> async(dispatch)=>{
    dispatch(setloading())
    dispatch(clearCart())
}


export const setShippingDetails=(value)=> async(dispatch)=>{
    dispatch(setloading())
    dispatch(setShipping(value))
    
}

