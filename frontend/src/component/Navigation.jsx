import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { CartState } from "../context/CartContext";

function Navigation() {
  const { cart } = CartState()
  return (
    <>
      <nav>
        <div className="bg-white p-6 mr-16">
          <ul className="flex gap-14 justify-end font-medium">
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/signin">Login</Link>
            </li>
        
            <li>
              <Link to="/cart"> { cart.length ? <Badge count= {cart.length}/>: null } <FiShoppingBag size={20}/>  </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}


const Badge = ({count})=>(
  <div className="text-sm w-6 h-6 absolute top-3 ml-3 rounded-xl text-center text-white bg-red-700">
    <p>{count}</p>
  </div>
);

export default Navigation;
