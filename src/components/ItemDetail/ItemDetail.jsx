import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'

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
        <div className='card text-center'>
            <div className='card-body'>
            <img className="card-img-top" src={pictureUrl} alt={title} />
            <div className='card-title'>{title}</div>
            <div className='card-text'>${price}</div>
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
            <button className="btn btn-info" onClick={onFinishBuy}>Finalizar mi compra</button>
            </>
            }
        </div>
        </div>
    )
}

export default ItemDetail