import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from '../../firebase';
import "./Orders.css";
import BarLoader from "react-spinners/BarLoader"
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
`;

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAll = () => {
    const itemsCollection = db.collection("orders");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
        }
        let snapshot = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setOrders(snapshot);
        setIsLoading(false);
      })
      .catch((error) => {
      })
      .finally(() => {});
      setIsLoading(true);
  };

  function formatDate(dateFirestore) {
    let timestamp =
      dateFirestore.seconds * 1000 + dateFirestore.nanoseconds / 1000000;
    let dateObj = new Date(timestamp);
    let date = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getUTCFullYear();
    let fullDate = `${date}/${month}/${year}`;
    return fullDate;
  }
  function deleteOrder(id) {
    const order = db.collection("orders").doc(id);
    order.delete();
    let updatedOrders = orders.filter((order) => {
      return id !== order.id;
    });
    setOrders(updatedOrders);
  }
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
    {isLoading ? <div> <br /> <br /> <BarLoader css={override} size={150} /></div>
 	  : 
    <div>
        <br />
      {orders.length === 0 ? (
        <>
        <h2 className="appear">No hay ninguna orden</h2>
        <div className="final-buttons">
        <Link to="/" className="btn btn-info">
        <span className="back-link__text">Volver al inicio</span>
        </Link>
        </div>
        </>
      ) : (
        <div className="orders appear">
          <div className="orders-title">
            <h1>Gracias por tu compra!</h1>
          </div>
          {orders.map((order) => {
            return (
              <ul className="order-data" key={order.id}>
                <div className="order-header">
                  <h4>Tu orden</h4>
                  <p className="order-id">ID de la orden: {order.id} </p>
                  <button
                    onClick={() => {
                      deleteOrder(order.id);
                    }}
                    className="btn delete-btn"
                  >
                    <img
                    src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQyN3B0IiB2aWV3Qm94PSItNDAgMCA0MjcgNDI3LjAwMTMxIiB3aWR0aD0iNDI3cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTExNC4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTI4LjM5ODQzOCAxMjcuMTIxMDk0djI0Ni4zNzg5MDZjMCAxNC41NjI1IDUuMzM5ODQzIDI4LjIzODI4MSAxNC42Njc5NjggMzguMDUwNzgxIDkuMjg1MTU2IDkuODM5ODQ0IDIyLjIwNzAzMiAxNS40MjU3ODEgMzUuNzMwNDY5IDE1LjQ0OTIxOWgxODkuMjAzMTI1YzEzLjUyNzM0NC0uMDIzNDM4IDI2LjQ0OTIxOS01LjYwOTM3NSAzNS43MzA0NjktMTUuNDQ5MjE5IDkuMzI4MTI1LTkuODEyNSAxNC42Njc5NjktMjMuNDg4MjgxIDE0LjY2Nzk2OS0zOC4wNTA3ODF2LTI0Ni4zNzg5MDZjMTguNTQyOTY4LTQuOTIxODc1IDMwLjU1ODU5My0yMi44MzU5MzggMjguMDc4MTI0LTQxLjg2MzI4Mi0yLjQ4NDM3NC0xOS4wMjM0MzctMTguNjkxNDA2LTMzLjI1MzkwNi0zNy44Nzg5MDYtMzMuMjU3ODEyaC01MS4xOTkyMTh2LTEyLjVjLjA1ODU5My0xMC41MTE3MTktNC4wOTc2NTctMjAuNjA1NDY5LTExLjUzOTA2My0yOC4wMzEyNS03LjQ0MTQwNi03LjQyMTg3NS0xNy41NTA3ODEtMTEuNTU0Njg3NS0yOC4wNjI1LTExLjQ2ODc1aC04OC43OTY4NzVjLTEwLjUxMTcxOS0uMDg1OTM3NS0yMC42MjEwOTQgNC4wNDY4NzUtMjguMDYyNSAxMS40Njg3NS03LjQ0MTQwNiA3LjQyNTc4MS0xMS41OTc2NTYgMTcuNTE5NTMxLTExLjUzOTA2MiAyOC4wMzEyNXYxMi41aC01MS4xOTkyMTljLTE5LjE4NzUuMDAzOTA2LTM1LjM5NDUzMSAxNC4yMzQzNzUtMzcuODc4OTA3IDMzLjI1NzgxMi0yLjQ4MDQ2OCAxOS4wMjczNDQgOS41MzUxNTcgMzYuOTQxNDA3IDI4LjA3ODEyNiA0MS44NjMyODJ6bTIzOS42MDE1NjIgMjc5Ljg3ODkwNmgtMTg5LjIwMzEyNWMtMTcuMDk3NjU2IDAtMzAuMzk4NDM3LTE0LjY4NzUtMzAuMzk4NDM3LTMzLjV2LTI0NS41aDI1MHYyNDUuNWMwIDE4LjgxMjUtMTMuMzAwNzgyIDMzLjUtMzAuMzk4NDM4IDMzLjV6bS0xNTguNjAxNTYyLTM2Ny41Yy0uMDY2NDA3LTUuMjA3MDMxIDEuOTgwNDY4LTEwLjIxODc1IDUuNjc1NzgxLTEzLjg5NDUzMSAzLjY5MTQwNi0zLjY3NTc4MSA4LjcxNDg0My01LjY5NTMxMyAxMy45MjU3ODEtNS42MDU0NjloODguNzk2ODc1YzUuMjEwOTM3LS4wODk4NDQgMTAuMjM0Mzc1IDEuOTI5Njg4IDEzLjkyNTc4MSA1LjYwNTQ2OSAzLjY5NTMxMyAzLjY3MTg3NSA1Ljc0MjE4OCA4LjY4NzUgNS42NzU3ODIgMTMuODk0NTMxdjEyLjVoLTEyOHptLTcxLjE5OTIxOSAzMi41aDI3MC4zOTg0MzdjOS45NDE0MDYgMCAxOCA4LjA1ODU5NCAxOCAxOHMtOC4wNTg1OTQgMTgtMTggMThoLTI3MC4zOTg0MzdjLTkuOTQxNDA3IDAtMTgtOC4wNTg1OTQtMTgtMThzOC4wNTg1OTMtMTggMTgtMTh6bTAgMCIvPjxwYXRoIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIvPjwvc3ZnPg==" alt="Delete" width="30" height="30"
                    className="delete-icon"
                    />
                  </button>
                </div>
                <ul className="buyer">
                  <li>
                    <b>Nombre: </b> {order.buyer.name}
                  </li>
                  <li>
                    <b>Teléfono: </b> {order.buyer.phone}
                  </li>
                  <li>
                    <b>Email: </b> {order.buyer.email}
                  </li>
                  <li>
                    <b>Fecha: </b> {formatDate(order.date)}
                  </li>
                </ul>
                <li className="order-details">
                  <span>Producto</span>
                  <span>Cantidad</span>
                  <span>Precio</span>
                  <span>Subtotal</span>
                </li>
                {order.items.map(({ producto, cantidad }) => {
                  return (
                    <li className="order-item" key={producto.title}>
                      <span> {producto.title} </span>
                      <span> {cantidad}</span>
                      <span> $ {producto.price} </span>
                      <span> $ {producto.price * cantidad}</span>
                    </li>
                  );
                })}
                <li className="order-total">
                  <span>Total: </span> <span> $ {order.total} </span>{" "}
                </li>
              </ul>
            );
          })}
          <br />
            <div className="final-buttons">
                <Link to="/" className="btn btn-info">
                <span className="back-link__text">Volver al inicio</span>
                </Link>
            </div>
        </div>
      )}
    </div>
}
</>
  );
}
export default Orders;