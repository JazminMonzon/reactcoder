import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext()

export default function CartProvider({ children, defaultCart = [] }) {

  const [cart, setCart] = useState(defaultCart);

  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (producto) => {
    setCart([...cart, { 
        producto 
      }]);
  };

  const removeItem = (productoId) => {
    setCart(cart.filter((re) => re.producto.id !== productoId));
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

  const Total = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].producto.price * cart[i].cantidad;
    }
    return total;
  };
  useEffect(() => {
    setTotalPrice(Total());
  }, [cart]);

  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};