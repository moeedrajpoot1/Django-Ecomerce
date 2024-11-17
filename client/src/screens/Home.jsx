import React, { useEffect } from 'react';

import ProductCart from '../layouts/ProductCart';
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/products';
const Home = () => {
 
 const dispatch=useDispatch()
 const {loading,products,error}= useSelector(state => state.product)
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);



  return (
    <div>
      {products && products.map((x, index) => (
        <ProductCart key={index} product={x} />// Display product name or relevant data
      ))}
    </div>
  );
};

export default Home;
