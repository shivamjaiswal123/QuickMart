import React, { useState, useEffect } from "react";
import { CartState } from "../context/CartContext";
import ContinueShopping from "../component/ContinueShopping";
import Footer from "../component/Footer";
import { useNavigate } from "react-router";

function Cart() {
  const { setCart, cart } = CartState();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  const deleteProductFromCart = prod => {
    setCart(cart.filter(c => c.id !== prod.id));
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Math.floor(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeQty = (e, prod) => {
    setCart(
      cart.filter(c =>
        c.id === prod ? (c.qty = parseInt(e.target.value)) : c.qty
      )
    );
  };

  return (
      <>
    <div className="mx-12">
      <div className="flex gap-6">
        <div className="w-4/5 h-screen">
          <h1 className="text-lg">
            <span className="text-2xl font-bold">My Bag</span> ({cart.length})
          </h1>
          {cart.length ? (
            cart.map(prod => (
              <div className="flex my-8 border border-gray-400">
                <img src={prod.thumbnail} alt="" className="w-36" />
                <h1 className="mt-12 font-semibold">{prod.title}</h1>

                <select
                  name="quantity"
                  id=""
                  className="m-12 h-8"
                  onChange={e => changeQty(e, prod.id)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <div className="flex flex-col gap-16">
                  <h1 className="mt-12 font-semibold text-amber-900">
                    ₹ {prod.price.toString().split(".")[0]}
                  </h1>
                  <div>
                    <button
                      onClick={() => deleteProductFromCart(prod)}
                      type="button"
                      className="text-blue-700 font-medium text-sm px-5 py-2.5"
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      className="text-blue-700 font-medium text-sm px-5 py-2.5"
                    >
                      Move to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <ContinueShopping/>
          )}
        </div>
        {cart.length > 0 ? (
          <div className="bg-gray-50 border w-2/5 h-[50vh] py-8 space-y-20">
            <div className="p-4 max-w-sm mx-auto">
              <div className="space-y-2">
                <h1 className="text-lg font-semibold mb-10">Order Details</h1>
                {/* Delivery Fee */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">₹99.00</span>
                </div>

                {/* Order Total */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Total</span>
                  <span className="font-semibold">
                    ₹ {total.toString().split(".")[0]}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              {/* <button className="mt-6 w-full py-2 text-white bg-amber-900">
              PROCEED TO CHECKOUT
            </button> */}
            </div>
            <button onClick={() => navigate('/order')} className="mt-6 w-full py-4 text-white bg-black font-semibold">
              PROCEED TO CHECKOUT
            </button>
          </div>
        ) : null}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Cart;
