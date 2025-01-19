import React from 'react'
import { ImStarEmpty } from "react-icons/im";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Rating = ({ product }) => {
    return (
        <div className="text-white flex items-center justify-start gap-1.5 ">
            {product.rating === 0 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                </div>
            ) : product.rating  > 0 && product.rating  < 1 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <FaRegStarHalfStroke />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 1 && product.rating  < 1.5 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 1.5 && product.rating  < 2 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <FaRegStarHalfStroke />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 2 && product.rating  < 2.5 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <IoStarSharp />
                    <ImStarEmpty />
                    <ImStarEmpty />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 2.5 && product.rating  < 3 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <IoStarSharp />
                    <FaRegStarHalfStroke />
                    <ImStarEmpty />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 3 && product.rating  < 3.5 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <ImStarEmpty />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 3.5 && product.rating  < 4 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <FaRegStarHalfStroke />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 4 && product.rating  < 4.5 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    {" "}
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <ImStarEmpty />
                </div>
            ) : product.rating  >= 4.5 && product.rating  < 5 ? (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <FaRegStarHalfStroke />
                </div>
            ) : (
                <div className="text-orange-500 flex items-center justify-start">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                </div>
            )}
            <span className="font-bold text-orange-500">(</span>
            {product.rating }
            <span className="font-bold text-orange-500">)</span>
        </div>
    )
}

export default Rating