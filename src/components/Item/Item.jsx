import React from "react"
import "./Item.css"

export default function Item({ id, title, price }) {
    return(
    <div className='card'>
        <div className='card-body'>
            <div>{id}</div>
            <div className='card-title'>{title}</div>
            <div className='card-text'>{price}</div>
            <button className="btn btn-outline-info btn-sm">Detalles</button>
        </div>
      </div>
      )
}
