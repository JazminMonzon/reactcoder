import React from "react"
import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export default function Item({ id, title, price, pictureUrl, stock, category }) {
    return(
    <div className='row'>
        <div className='col-sm-6'>
            <div className='card text-center'>
                <img className="card-img-top" src={pictureUrl} alt={title} />
                <div className='card-body'>
                    <div className='card-title'>{title}</div>
                    <div className='card-text'>${price}</div>
                    <Link className="btn btn-outline-info btn-sm" to={`/${category}/${id}`}>
                    Más detalles
                    </Link>
                    <ItemCount stock={stock} initial={1} onAdd={() => alert(`Agregaste ${title} al carrito`) } />
                </div>
            </div>
        </div>
    </div>
      )
}
