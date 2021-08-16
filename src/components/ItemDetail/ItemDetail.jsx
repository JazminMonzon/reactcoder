import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../Counter/ItemCount"

export default function ItemDetail({ title, description, price, id, stock, pictureUrl }) {
    return(
        <div className='card text-center'>
            <div className='card-body'>
            <div>{id}</div>
            <img className="card-img-top" src={pictureUrl} alt="Item Carrito" />
            <div className='card-title'>{title}</div>
            <div className='card-text'>{price}</div>
            <div>{description}</div>
            <ItemCount stock={stock} initial={1} onAdd={() => alert(`Agregaste ${title} al carrito`) } />
        </div>
        </div>
    )
}