import React, { useState } from 'react';

export const CartContext = React.createContext()

export default function CartProvider({ children, defaultCart = [] }) {

  const [cart, setCart] = useState(defaultCart);

  const isInCart = (id) => {
    const resultado = cart.find((prod) => prod.producto.id === id);
    return resultado;
  };

  const addItem = ({ producto, cantidad}) => {
    setCart([...cart, { producto, cantidad} ]);
    if (isInCart(producto.id)) {
      const nuevoCarrito = cart.map((prod) => {
        if(prod.producto.id === producto.id) {
          prod.cantidad = prod.cantidad + cantidad
        }
        return prod;
      })
      setCart(nuevoCarrito)
    } else {
      setCart([...cart, { producto, cantidad} ]);
    }
  };


  const removeItem = (productoId) => {
    setCart(cart.filter((re) => parseInt(re.producto.id) !== parseInt(productoId)));
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};