import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { favoritesToggled } from '../redux/actions/products';
import { removeFromCart } from '../redux/actions/cartActions';

const Navigation = () => {
  const dispatch = useDispatch();
  const { favoritesToggle } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="shrink-0">
              <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="Logo" />
              <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="Logo Dark" />
            </Link>
            <ul className="hidden lg:flex items-center gap-6 md:gap-8 py-3">
              <li><Link to="/" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Home</Link></li>
              <li><Link to="/best-sellers" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Best Sellers</Link></li>
              <li><Link to="/gift-ideas" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Gift Ideas</Link></li>
              <li><Link to="/deals" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Today's Deals</Link></li>
              <li><Link to="/sell" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Sell</Link></li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            {/* Favorites Toggle */}
            <button className="p-2 bg-slate-700 text-white rounded-lg" onClick={() => dispatch(favoritesToggled(!favoritesToggle))}>
              {favoritesToggle ? <MdOutlineFavorite className="w-6 h-6" /> : <MdOutlineFavoriteBorder className="w-6 h-6" />}
            </button>

            {/* Cart Button */}
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative flex items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h1.5L9 16h8m0 0a2 2 0 11-4 0 2 2 0 014 0zM9 16a2 2 0 11-4 0 2 2 0 014 0zM9.5 13h9.25L19 7H7.312" />
              </svg>
              <span className="hidden sm:inline ml-2">My Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{cartItems.length}</span>
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div ref={cartRef} className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Cart Items</h3>
                <div className="max-h-60 overflow-y-auto">
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-700">
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">${item.price} - Qty: {item.quantity}</p>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-white bg-red-600 hover:bg-red-700 text-xs font-bold px-2 py-1 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-center">Your cart is empty.</p>
                  )}
                </div>
                {cartItems.length > 0 && (
                  <Link to="/checkout" className="block text-center bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 mt-4 rounded-lg">Proceed to Checkout</Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
