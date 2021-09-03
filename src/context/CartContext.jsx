import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext()

export default function CartProvider({ children, defaultCart = [] }) {

  const [cart, setCart] = useState(defaultCart);
  const [totalPrice, setTotalPrice] = useState(0);

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

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};