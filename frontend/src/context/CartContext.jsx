import React, { createContext, useState, useContext } from 'react'

const Cart = createContext()

function CartContext({children}) {

    const [cart, setCart] = useState([])

    return (
        <Cart.Provider value={{ cart, setCart }}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext

export const CartState = () => {
    return useContext(Cart)
}
