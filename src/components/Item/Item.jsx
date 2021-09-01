import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"

export default function Item({ id, title, price, pictureUrl, category }) {
    return(
    <div className='container'>
            <div className='card text-center'>
                <Link to={`/productos/${id}`}>
                <img className="card-img-top" src={pictureUrl} alt={title} />
                </Link>
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <h4 className='card-text'>${price}</h4>
                    <Link className="btn btn-outline-info btn-sm" to={`/productos/${id}`}>
                    Más detalles
                    </Link>
                </div>
            </div>
    </div>
      )
}