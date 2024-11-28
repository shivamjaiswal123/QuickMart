import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { CartState } from "../context/CartContext";

function Navigation() {
  const { cart } = CartState();
  return (
    <>
      <div className="bg-black p-1 text-center px-8 font-nav">
        <span className="text-white font-semibold">We Offer free shipping</span>
      </div>
      <div className="bg-white shadow-lg p-6 flex items-center gap-6 justify-around shadow-md mb-1">
      <Link to="/">
        <img style={{width:65}} className="cursor-pointer" src="https://trademaklogos.s3.ap-south-1.amazonaws.com/5493677.jpeg" alt=""/>
      </Link>
        <nav>
          <ul className="flex font-semibold gap-12 cursor-pointer">
            <li>MENS</li>
            <li>WOMENS</li>
            <li>KIDS</li>
            <li>BEAUTY</li>
          </ul>
        </nav>

        <input
          type="text"
          placeholder="SEARCH..."
          className="border p-2 w-1/4 border-none bg-gray-100 rounded-md pl-8"
        />

        <Link to="/cart">
          {" "}
          {cart.length ? <Badge count={cart.length} /> : null}{" "}
          <FiShoppingBag size={20} />{" "}
        </Link>
      </div>
    </>
  );
}

const Badge = ({ count }) => (
  <div className="w-6 h-6 absolute top-12 ml-2.5 rounded-xl text-center text-white bg-red-700">
    <p>{count}</p>
  </div>
);

export default Navigation;
