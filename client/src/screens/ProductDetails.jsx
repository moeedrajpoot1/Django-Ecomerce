import React, { useState,useEffect } from "react";
import {useParams,Link} from "react-router-dom"
import { useDispatch, useSelector}from "react-redux"
import {fetchProduct} from "../redux/actions/products"
import Loader from "../layouts/Loader";

const ProductDetails = () => {
  const {id}=useParams()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch()
  const {loading,product,error}=useSelector(state => state.product)




  const SumbitHandleToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // if (!product.images || product.images.length === 0)
  //   return <div>No images for this product</div>;
  useEffect(()=>{
    dispatch(fetchProduct(id))
  },[])


  return (
<>
{loading ? <Loader/>:(
  <div className="pt-6">
      <Link
        className="p-2 bg-transparent shadow-2xl rounded-xl hover:shadow-slate-50 text-2xl text-gray-900"
        to="/products/getAllProducts"
      >
        &larr; Back
      </Link>
      <div className="p-2 mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          {/* <img
            onClick={() => handleImageClick(0)}
            src={product.images[selectedImageIndex].url}
            alt={product.images[selectedImageIndex].discription}
            className="h-full w-full object-cover object-center"
          /> */}
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            {/* <img
              src={product.images[0].url}
              alt={product.images[0].discription}
              className="h-full w-full object-cover object-center"
            /> */}
          </div>
          <div className="aspect-h-1 aspect-w-3 overflow-hidden rounded-lg">
            {/* <img
              src={product.images[1].url}
              alt={product.images[1].discription}
              className="h-full w-full object-cover object-center"
            /> */}
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          {/* <img
            src={product.images[2].url}
            alt={product.images[2].discription}
            className="h-full w-full object-cover object-center"
          /> */}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product && product.name}
          </h1>
          <hr className="mt-2" />
          <h2 className="mt-2 font-semibold">Description</h2>
          <p className="mt-3 font-thin">{product && product.description}</p>

          <h2 className="mt-2 font-semibold">Details</h2>
          <p className="mt-3 font-thin">{product && product.subtitle}</p>

          {/* <div className="mt-3">
            <h2 className="mt-2 font-semibold">Reviews</h2>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="mt-3">
                {product.reviews.map((review) => (
                  <div
                    //key={review._id}
                    className="border-b border-gray-200 pb-4 mb-4"
                  >
                    <div className=" items-center">
                      <p className="ml-2 font-medium">{review.username} </p>
                    </div>
                    <p className="mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Reviews Yet! Be the first to review this product.</p>
            )}
            <button
              onClick={SumbitHandleToggle}
              className="bg-purple-500 text-white py-2 px-2 w-full rounded-md hover:bg-purple-600"
            >
              Submit & change Review
            </button>
          </div> */}
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
           price
          </p>

          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center"></div>
              <p className="sr-only"> out of 5 stars</p>
              <a
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                //  href={<Reviews />}
              >
                 reviews
              </a>
            </div>
            <p
              className={10 < 1 ? "text-red-600" : "text-green-600"}
            >
           
              <b>
                {product && product.stock < 1 ? "Product available" : "Product available"}
              </b>
            </p>
          </div>

          <form className="mt-10">
            <div className="flex space-x-2">
              <input
                type="number"
                min="1"
                max={10}
                className="w-16 border p-1 rounded-md text-center"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button
                className="bg-purple-500 w-full text-white py-1 px-3 rounded-md hover:bg-purple-600 disabled:opacity-50"
                onClick={(event) => handleAddToCart(event)}
                disabled={quantity <= 0 || quantity > 10}
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-3">
            Status:{" "}
              <b
                className={
                  quantity <=  product && product.stock ? "text-green-600" : "text-red-600"
                } 
              >
                {quantity <= product &&  product.stock ? "In Stock" : "Out of Stock"}
              </b>
            </div>
          </form>
        </div>
      </div>
    </div>


)}



</>
  );
};

export default ProductDetails;



