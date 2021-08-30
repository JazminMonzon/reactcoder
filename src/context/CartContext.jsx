import React, { useState } from 'react';

export const CartContext = React.createContext()

export default function CartProvider({ children, defaultCart = [] }) {

  const [cart, setCart] = useState(defaultCart);

  const addItem = (producto) => {
    setCart([...cart, { 
        producto 
      }]);
  };

  const removeItem = (productoId) => {
    const newProducts = cart.filter((producto) => producto.id !== productoId)
    setCart(newProducts);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const product = cart.find((producto) => producto.id === id);
    if (product) {
      return true;
    } else {
      return false;
    }
  };

  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};