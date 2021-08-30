import React, { useState } from 'react';

export const CartContext = React.createContext()

export default function CartProvider({ children, defaultCart = [] }) {

  const [cart, setCart] = useState(defaultCart);

  const isInCart = (id) => {
    const producto = cart.find((producto) => producto.id === id);
    if (producto) {
      return true;
    } else {
      return false;
    }
  };

  const addItem = (producto) => {
    if (isInCart(producto)){
      console.log("El producto ya existe en el carrito");
      return;
      } else {
    setCart([...cart, { 
        producto 
      }]);
      console.log("Producto agregado al carrito")
  }
  };

  const removeItem = (productoId) => {
    setCart(cart.filter((re) => parseInt(re.producto.producto.id) !== parseInt(productoId)));
  };

  const clear = () => {
    setCart([]);
  };

  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};