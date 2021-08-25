import "./ItemCount.css"
import React, { useState } from "react";

export default function ItemCount( { stock = 0, initial = 1, onAdd }) {
  
  const [cantidad, setCantidadSeleccionada] = useState(initial)

  const increment = () => {
    if (cantidad < stock) setCantidadSeleccionada(cantidad+1)
  }

  const decrement = () => {
    if (cantidad > 0) setCantidadSeleccionada(cantidad-1)
  }

  return(
    <>
      <div className='item-count'>
        <button className="btn btn-outline-info" onClick={() => decrement()}>-</button>
        <span className='count'>{cantidad}</span>
        <button className="btn btn-outline-info" onClick={() => increment()}>+</button>
      </div>
      <div>
        <button className="btn btn-outline-info" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
      </div>
    </>
  )
}