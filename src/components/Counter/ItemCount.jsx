import "./ItemCount.css"
import React, { useState } from "react";

export default function ItemCount( { stock = 0, initial = 0, onAdd = () => {} }) {
  
  const [userSelected, setUserSelected] = useState(initial)

  const increment = () => {
    if (userSelected < stock) setUserSelected(userSelected+1)
  }

  const decrement = () => {
    if (userSelected > 0) setUserSelected(userSelected-1)
  }

  const handleOnAddCart = (event) => {
    if (userSelected > 0) onAdd(event)
  }

  return(
    <>
      <div className='item-count'>
        <button className="btn btn-outline-info" onClick={() => decrement()}>-</button>
        <span className='count'>{userSelected}</span>
        <button className="btn btn-outline-info" onClick={() => increment()}>+</button>
      </div>
      <button className="btn btn-info" onClick={handleOnAddCart}>Agregar al carrito</button>
    </>
  )
}