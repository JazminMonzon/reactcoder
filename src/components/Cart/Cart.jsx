import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);

  return (
    <div className="container-list">
      <div>
        <h1 className="cart-section-text">Carrito de compras</h1>
        <div className="card w-100 message-card">
          {cart.length === 0 ? (
            <h5 className="message">
              No hay ningún producto en tu carrito
            </h5>
          ) : (
            cart.map((producto, key) => <ItemCart key={key} {...producto} />)
          )}
        </div>
      </div>
      <h3 className="total">Total $ {totalPrice}</h3>

      <div className="final-buttons">
        <button className="btn btn-info" onClick={() => clear()}>
          Vaciar carrito
        </button>
        <Link to="/" className="return-link">
          <button className="return-link-text btn btn-info">
            Volver al listado
          </button>
        </Link>
        <Link
          to="/checkout"
          className={`${cart.length === 0 ? "disabled" : ""}`}
        >
          <button className="btn btn-info">Terminar mi compra</button>
        </Link>
      </div>
    </div>
  );
};
export default Cart;