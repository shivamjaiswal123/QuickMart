import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Sliderr from "../component/Slider";
import AuthContext from "../context/AuthContext";

function Product() {
  const [productDetails, setProductDetails] = useState();
  const { setBagSize, setBagItems, bagItems }  = useContext(AuthContext)
  const { id } = useParams();


  const fecthProductDetails = async () => {
    const res = await fetch("https://dummyjson.com/products/" + id);
    const result = await res.json();
    console.log(result);
    setProductDetails(result);
  };

  const handleOnClick = () => {
    setBagSize(prevCount => prevCount + 1 )
  }

  useEffect(() => {
    fecthProductDetails();
  }, []);

  if (!productDetails) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div class="flex">
        <div class="w-2/3 h-screen">
          {/* {productDetails.images.map(imag => <img width="600" src={imag} alt=""/> )} */}
          {productDetails.images.length > 2 ? (
            <Sliderr images={productDetails.images} />
          ) : (
            <img width="600" src={productDetails.images[0]} alt="" />
          )}
        </div>
        <div class="w-1/2 h-screen p-16">
          <h1 class="mb-2 font-semibold text-2xl">{productDetails.title}</h1>
          <p class="mb-2">{productDetails.description}</p>
          <span class="bg-green-500 px-2 rounded-md text-white font-semibold">
            {productDetails.rating} ★
          </span>
          <p class="mt-2 text-2xl font-bold">₹{productDetails.price}</p>
          <button
            onClick={handleOnClick}
            class="text-white bg-amber-900 w-full p-2 mt-4"
          >
            Add to Bag
          </button>
          <button class="text-amber-900 w-full p-2 mt-4 border border-amber-900">
            SAVE TO WISHLIST
          </button>

          <h1 class="font-semibold mt-4">Highlight</h1>
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
