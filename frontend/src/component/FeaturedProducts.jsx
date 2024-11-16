import React from "react";
import { useNavigate } from "react-router-dom";

function FeaturedProducts({ product }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product/" + product.id)}
      className="inline-block bg-white p-6 m-2 border border-gray-200 rounded-lg shadow hover:cursor-pointer"
    >
      <h1 className="text-center mb-2 font-semibold tracking-tight">
        {product.title}
      </h1>
      <img width="250" src={product.thumbnail} alt="" />

      <div className="flex justify-center gap-2">
        <p className="text-xl mt-4 font-bold">
          {" "}
          ₹{product.discountPercentage.toString().split(".")[0]}
        </p>
        <p className="text-lg mt-4 font-bold line-through text-gray-600">
          {" "}
          ₹{product.price.toString().split(".")[0]}
        </p>
      </div>
    </div>
  );
}

export default FeaturedProducts;
