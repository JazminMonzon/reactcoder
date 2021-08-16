import React from "react"
import "./Item.css"
import ItemCount from "../Counter/ItemCount"

export default function Item({ id, title, price, pictureUrl, stock }) {
    return(
    <div className='row'>
        <div className='col-sm-6'>
            <div className='card text-center'>
                <img className="card-img-top" src={pictureUrl} alt="Item Carrito" />
                <div className='card-body'>
                    <div>{id}</div>
                    <div className='card-title'>{title}</div>
                    <div className='card-text'>{price}</div>
                    <button className="btn btn-outline-info btn-sm">Detalles</button>
                    <ItemCount stock={stock} initial={1} onAdd={() => alert(`Agregaste ${title} al carrito`) } />
                </div>
            </div>
        </div>
    </div>
      )
}
