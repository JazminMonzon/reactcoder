import React from "react"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import data from '../../data/data'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const  ItemDetailContainer = () => {

 const [producto, setProducto] = useState([])
 const [cargando, setCargando] = useState(true)

 const { id } = useParams()

 useEffect(()=>{
    const productos = () =>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(data)
        }, 2000)
      })
    }
    productos().then((items)=>{
      const producto = items.find(producto => producto.id === id)
      setProducto(producto)
      setCargando(false)
    })
 }, [id])
  
    return(
        <>
        {cargando ? <h2>Cargando productos</h2> :
        <ItemDetail title={producto.title} description={producto.description} price={producto.price} stock={producto.stock} category={producto.category} id={producto.id} pictureUrl={producto.pictureUrl} /> } 
        </>
        )
}

export default ItemDetailContainer