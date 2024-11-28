import React, { useState, useEffect } from "react";
import { CartState } from "../context/CartContext";

function TrendingProducts() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const { cart, setCart } = CartState()

  const fetchTrendingProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=4&skip=66");
    const result = await res.json();
    setTrendingProducts(result.products);
  };

  useEffect(() => {
    fetchTrendingProducts();
  }, []);

  const addToBag = (prod) => {
    prod.qty = 1
    setCart([...cart, prod])
  }

  return (
    <div className="flex gap-6 flex-wrap">
      {trendingProducts.map((prod, i) => (
        <div className="card bg-base-100 w-72 shadow-xl mx-1" key={i}>
          <figure>
            <img
              className="h-52"
              src={prod.thumbnail}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {prod.title}
              {i % 2 == 0 ? (
                <div className="badge badge-neutral">NEW</div>
              ) : null}
            </h2>

            <p className="truncate text-sm">
              {prod.description}
            </p>
            <div className="flex">
              <p className="text-xl mt-4 font-bold">₹{prod.discountPercentage}</p>
              <p className="text-lg mt-4 font-bold line-through text-gray-600">
                ₹{prod.price}
              </p>
            </div>
            <div className="card-actions justify-end">
                {prod.tags.map((tag, i) => (
                    <span className="" key={i}>
                        <div className="badge badge-outline">{tag}</div>
                    </span>
                ))}
            </div>
            <button onClick={() => addToBag(prod)} className="btn bg-black text-white mt-4 hover:bg-red-600 hover:text-black">
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrendingProducts;
