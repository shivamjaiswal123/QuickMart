import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Pages/Signin.jsx";
import Signup from "./Pages/Signup.jsx";
import Explore from "./Pages/Explore.jsx";
import RootLayout from "./Pages/RootLayout.jsx";
import Product from "./Pages/Product.jsx";
import CartContext from "./context/CartContext";
import Cart from "./Pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={ <RootLayout/> }>
          <Route index element={ <Explore /> }/>
          <Route path="signin" element={ <Signin /> }/>
          <Route path="signup" element={ <Signup /> }/>
          <Route path="product/:id" element={ <Product />  }/>
          <Route path="cart" element={ <Cart />  }/>
        </Route>
        
    </Route>
));

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
  // </StrictMode>
);
