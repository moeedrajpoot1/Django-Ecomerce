import  { useState,useEffect } from "react";
import {useParams,Link} from "react-router-dom"
import { useDispatch, useSelector}from "react-redux"
import {fetchProduct} from "../redux/actions/products"
import Loader from "./Loader";

const ProductDetails = () => {
  const {id}=useParams()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch()
  const {loading,product,error}=useSelector(state => state.product)






  // if (!product.images || product.images.length === 0)
  //   return <div>No images for this product</div>;
  useEffect(()=>{
    dispatch(fetchProduct(id))
  },[])


  return (
<>



</>
  );
};

export default ProductDetails;



