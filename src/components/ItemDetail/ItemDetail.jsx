import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ producto }) => {

    const [itemCountVisible, setItemCountVisible] = useState(true)
    const initialState = 1;
    const [cantidad, setCantidad] = useState(initialState)

    const { addItem } = useContext(CartContext);
    
    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        setItemCountVisible(false)
        addItem({
            producto,
            cantidad,
         })
    }

    return (
        <div className='container'>
            <div className='card text-center'>
                <div className='card-body'>
                    <img className="card-img-top" src={producto.pictureUrl} alt={producto} />
                    <h5 className='card-title'>{producto.title}</h5>
                    <h4 className='card-text'>${producto.price}</h4>
                    <div>{producto.description}</div>
                    {itemCountVisible ? <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} /> : 
                    <>
                    <br />
                    <Link className="boton-detail btn btn-outline-info" to="/">Seguir comprando</Link>
                    <Link className="boton-detail btn btn-info" to="/cart">Ir al carrito</Link>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail