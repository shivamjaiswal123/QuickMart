import React from "react";
import { Link } from "react-router-dom";
function ContinueShopping() {
  return (
    <div className="text-center">
      <h1 className="m-12 font-mono text-xl">Your Shopping Bag is Empty!!</h1>
      <Link to="/" className="bg-amber-700 text-white p-4 mt-8 rounded-md">
        CONTINUE SHOPPING
      </Link>
    </div>
  );
}

export default ContinueShopping;
