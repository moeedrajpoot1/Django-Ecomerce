import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/products";
import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import ImageGallery from "../layouts/ImageGallery"; // Import ImageGallery

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector((state) => state.product);

  console.log("Product ID:", id);
  console.log("Product state:", product);
  console.log("Loading state:", loading);
  console.log("Error state:", error);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Handle case where product is null or undefined
  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <MetaData title={product?.name} />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-700 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 111.414 1.414L4.414 10l6.293 6.293a1 1 0 01-1.414 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>

      {/* Grid Layout: Images Left | Content Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div className="md:w-full">
          <ImageGallery images={product?.images} />
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product?.name || "Product Name"}</h1>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-700">{product?.description || "No description available."}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Details</h2>
            <p className="text-gray-700">{product?.details || "No additional details available."}</p>
          </div>

          {/* Pricing & Stock */}
          <div className="border p-4 rounded-lg shadow-lg mt-4">
            <h2 className="text-lg font-semibold mb-2">Price</h2>
            <p className="text-2xl font-bold text-green-600">
              ${product?.price || "N/A"}
            </p>
            <p className={`text-sm mt-2 ${product?.stock > 0 ? "text-green-500" : "text-red-500"}`}>
              {product?.stock > 0 ? `Product available (${product.stock} in stock)` : "Out of Stock"}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center mt-4">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border p-2 w-16 text-center"
                min="1"
                disabled={product?.stock === 0}
              />
              <button
                onClick={() => console.log("Add to cart clicked")}
                disabled={product?.stock === 0}
                className={`ml-4 px-4 py-2 rounded text-white ${
                  product?.stock > 0 ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;



