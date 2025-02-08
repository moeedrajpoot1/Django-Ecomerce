import React, { useEffect } from 'react';

import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/products';
import ProductCard from '../layouts/ProductCard';
import MetaData from '../layouts/MetaData';
const Home = () => {
 
 const dispatch=useDispatch()
 const {loading,products,error}= useSelector(state => state.product)
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);



  return (
    <div className=' bg-slate-800  p-4 sm:p-6 md:p-8'>
      <MetaData title="Home" />
      <h1 className="font-mono text-white font-semibold  text-center text-6xl mb-4">
        Show All Products


      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-32'>
      {products && products.map((x, index) => (
        <ProductCard key={index} product={x} />// Display product name or relevant data
      ))}
      </div>
    </div>
  );
};

export default Home;
