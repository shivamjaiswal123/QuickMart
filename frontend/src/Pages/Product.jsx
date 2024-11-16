import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Sliderr from "../component/Sliderr";
import { CartState } from "../context/CartContext";

function Product() {
  const [productDetails, setProductDetails] = useState();
  const { id } = useParams();
  const { cart, setCart } = CartState()


  const fecthProductDetails = async () => {
    const res = await fetch("https://dummyjson.com/products/" + id);
    const result = await res.json();
    result.qty = 1
    setProductDetails(result);
  };
  console.log("cart: ", cart)

  const addToBag = () => {
    setCart([...cart, productDetails])
  }

  useEffect(() => {
    fecthProductDetails();
  }, []);

  if (!productDetails) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div className="flex">
        <div className="w-2/3 h-screen">
          {/* {productDetails.images.map(imag => <img width="600" src={imag} alt=""/> )} */}
          {productDetails.images.length > 2 ? (
            <Sliderr images={productDetails.images} />
          ) : (
            <img width="600" src={productDetails.images[0]} alt="" />
          )}
        </div>
        <div className="w-1/2 h-screen p-16">
          <h1 className="mb-2 font-semibold text-2xl">{productDetails.title}</h1>
          <p className="mb-2">{productDetails.description}</p>
          <span className="bg-green-500 px-2 rounded-md text-white font-semibold">
            {productDetails.rating} ★
          </span>
          <p className="mt-2 text-2xl font-bold">₹{productDetails.price}</p>
          <button
            onClick={addToBag}
            className="text-white bg-amber-900 w-full p-2 mt-4"
          >
            Add to Bag
          </button>
          <button className="text-amber-900 w-full p-2 mt-4 border border-amber-900">
            SAVE TO WISHLIST
          </button>

          <h1 className="font-semibold mt-4">Highlight</h1>
          <ul>
            <li>{productDetails.returnPolicy}</li>
            <li>{productDetails.warrantyInformation}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Product;
