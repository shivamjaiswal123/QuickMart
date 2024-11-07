import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import AuthContext from "../context/AuthContext";

function Navigation() {
  const { bagSize } = useContext(AuthContext)
  return (
    <>
      <nav>
        <div class="bg-white p-6 mr-16">
          <ul class="flex gap-14 justify-end font-medium">
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/signin">Login</Link>
            </li>
        
            <li>
              <Link> {bagSize ? <Badge count={bagSize}/> : null} <FiShoppingBag size={20}/>  </Link>
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
