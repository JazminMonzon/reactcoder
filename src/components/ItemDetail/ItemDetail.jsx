import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ title, description, price, stock, pictureUrl }) => {
    return(
        <div className='card text-center'>
            <div className='card-body'>
            <img className="card-img-top" src={pictureUrl} alt={title} />
            <div className='card-title'>{title}</div>
            <div className='card-text'>${price}</div>
            <div>{description}</div>
            <ItemCount stock={stock} initial={1} onAdd={() => alert(`Agregaste ${title} al carrito`) } />
        </div>
        </div>
    )
}

export default ItemDetail

// if ternario