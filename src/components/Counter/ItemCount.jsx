import "./ItemCount.css"
import React, { useEffect, useState } from "react";

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)
  
    const increment = () => {
      setCount(count+1)
    }
  
    const decrement = () => {
      setCount(count-1)
    }
     
    return {
      count, 
      increment,
      decrement
    }
  }

export default function ItemCount({ stock, initial, onAdd }) {

const { count, increment, decrement } = useCounter()

useEffect(() => {
console.log("useEffect()")
}, [count])


    return(
        <>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => increment()}>+</button>
        <div>{count}</div>
        <button>Agregar al carrito</button>
        </>
    )
}