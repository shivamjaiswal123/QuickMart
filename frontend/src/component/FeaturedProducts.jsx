import React from "react";
import { useNavigate } from "react-router-dom";

function FeaturedProducts({ product }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product/" + product.id)}
      className="inline-block bg-white p-4 m-2 w-[250px] border border-gray-300 hover:cursor-pointer"
    >
      <img width="250" src={product.thumbnail} alt="" />
      <h1 className="text-center text-sm mt-4">{product.title}</h1>

      <div className="flex justify-center mt-2">
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="text-sm font-bold text-gray-900 dark:text-white">
          {product.rating}
        </p>
      </div>

      <p className="text-center text-sm mt-4 font-semibold">
        {" "}
        Rs. {product.price.toString().split(".")[0]}
      </p>
    </div>
  );
}

export default FeaturedProducts;
