import React from 'react';
import '../css/custom.css';
import PriceComponents from './PriceComponents';
import { sale_cal } from '../functions/func';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg bg-[#0d1117] text-white shadow-md hover:shadow-lg overflow-hidden transition duration-300 ease-in-out mx-auto w-72">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          className="object-cover object-center w-full h-72 transition-transform duration-500 ease-in-out transform hover:scale-110"
          alt={product.name}
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Title */}
        <h1 className="text-center text-lg font-bold hover:text-orange-500 transition duration-500">
          {product.name}
        </h1>

        {/* Brand and Category */}
        <div className="flex justify-between text-gray-400 font-medium text-sm mt-1">
          <span className="hover:text-orange-500">{product.brand}</span>
          <span className="hover:text-orange-500">{product.category}</span>
        </div>

        {/* Rating and Price */}
        <div className="flex items-center justify-between mt-3">
          <span>
            <Rating product={product} />
          </span>
          <div className="text-right">
            {product.onSale ? (
              <div className="flex flex-col items-end text-red-500">
                <p className="text-lg font-bold">
                  Rs: {sale_cal(product.price, product.discount, product.onSale)}
                </p>
                <p className="line-through text-gray-400 text-sm">
                  {product.price}
                </p>
              </div>
            ) : (
              <p className="text-lg font-bold text-red-500">Rs: {product.price}</p>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <Link to={`/product/${product._id}`}>
          <button className="w-full mt-4 bg-purple-400 hover:bg-purple-600 px-3 py-2 rounded text-white font-semibold transition duration-300 ease-in-out">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
