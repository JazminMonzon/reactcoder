import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].producto.price * cart[i].cantidad;
  }

  return (
    <div className="container-list">
      <div>
        <h1 className="cart-section-text">Carrito de compras</h1>
        <div className="card w-100 message-card">
          {cart.length === 0 ? (
            <h5 className="message">
              No hay ningún producto en tu carrito.
            </h5>
          ) : (
            cart.map((producto, key) => <ItemCart key={key} {...producto} />)
          )}
        </div>
      </div>
      { cart.length !== 0 ? (
      <h2 className="total">Total ${total}</h2>
      ):
        <div />
        }
      <div className="final-buttons">
      { cart.length !== 0 ? (
        <button className="boton btn btn-outline-info" onClick={() => clear()}>Vaciar carrito</button>
        ):
        <div />
        }
        <Link to="/" className="return-link">
          <button className="return-link-text boton btn btn-outline-info">Volver al listado</button>
        </Link>
        { cart.length !== 0 ? (
        <Link to="/checkout">
          <button className="boton btn btn-info">Terminar mi compra</button>
        </Link>
        ):
        <div />
        }
      </div>
    </div>
  );
};
export default Cart;