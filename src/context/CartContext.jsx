import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext()

export default function CartProvider({ children, defaultCart = [] }) {

  const [cart, setCart] = useState(defaultCart);

  const [totalPrice, setTotalPrice] = useState(0);

  const [totalItems, setTotalItems] = useState(0);

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

  useEffect(() => {
		const Total = () => {
			let totalPrice = 0;
			let totalItems = 0;
			for (const Producto of cart) {
				totalPrice = totalPrice + Producto.price * Producto.cantidad;
				totalItems += Producto.cantidad;
			}
			setTotalItems(totalItems);
			setTotalPrice(totalPrice.toFixed(2));
		};
		Total();
	}, [cart]);

  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};