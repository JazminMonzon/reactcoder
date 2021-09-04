import { CartContext } from '../../context/CartContext'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css"
import { db } from '../../firebase';
import firebase from "firebase/app";

function Checkout(props) {
  const context = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = () => {

    let items = context.cart;

    const newOrder = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: context.totalPrice,
    };

    const orders = db.collection("orders");
    orders
      .add(newOrder)
      .then((resp) => {
        let batch = db.batch();

        let itemsRef = db.collection("items");
        context.cart.forEach((producto) => {
          batch.update(itemsRef.doc(producto.id), { stock: producto.stock });
        });

        batch.commit().then(() => {
          context.clear();
          setBuyer({ name: "", phone: "", email: "" });
        });
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="checkout appear" hidden={context.cart.length === 0}>
        <div className="check-order">Completá tus datos</div>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          id="name"
          placeholder=" "
        />
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="phone"
          onChange={handleInputChange}
          id="tel"
          placeholder=" "
        />
        <label htmlFor="tel">Teléfono</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          id="email"
          placeholder=" "
        />
        <label htmlFor="email">Email</label>

        <div className="check-order">PRODUCTOS</div>
        <ul className="checkout-order">
          <li className="checkout-order__head">
            <span>Productos</span>
            <span>Cantidad</span>
            <span>Precio</span>
            <span>Subtotal</span>
          </li>
          {context.cart.map(({ producto, cantidad }) => {
            return (
              <li className="checkout-order__item" key={producto.title}>
                <span> {producto.title} </span>
                <span> {cantidad}</span>
                <span> $ {producto.price} </span>
                <span> $ {producto.price * cantidad}</span>
              </li>
            );
          })}
          <li className="checkout-order__total">
            <span>Total: </span> <span> $ {context.totalPrice} </span>{" "}
          </li>
        </ul>
        <br />
        <div className='checkout-buttons'>
        <Link to="/cart">
            <button className="boton btn btn-outline-info">
            Volver al carrito
          </button>
        </Link>
        <Link to="/orders" onClick={createOrder}>
          <button className="boton btn btn-info">
            Finalizar compra
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;