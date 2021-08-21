import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from "react-router-dom"

const ItemDetail = ({ title, description, price, stock, pictureUrl }) => {

    const [itemCountVisible, setItemCountVisible] = useState(true)
    const [itemsCount, setItemsCount] = useState(0)
    const [buyButtonsVisibility, setBuyButtonsVisibility] = useState(true)

    const onAdd = (count) => {
        setItemsCount (count)
    }

    const onBuy = () => {
        setItemCountVisible(false)
        setBuyButtonsVisibility(false)
    }

    const onFinishBuy = () => {
        console.log("Finalizar mi compra")
    }

    return(
        <div className='container'>
        <div className='card text-center'>
            <div className='card-body'>
            <img className="card-img-top" src={pictureUrl} alt={title} />
            <h5 className='card-title'>{title}</h5>
            <h4 className='card-text'>${price}</h4>
            <div>{description}</div>
            {itemCountVisible && <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
            {buyButtonsVisibility && 
            <>
            <button className="btn btn-info" onClick={onBuy}>Comprar ahora</button>
            </>
            }
            {!buyButtonsVisibility &&
            <>
            <br />
            <Link className="btn btn-info" onClick={onFinishBuy} to="/cart">Finalizar mi compra</Link>
            </>
            }
        </div>
        </div>
        </div>
    )
}

export default ItemDetail