import React from "react"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import data from '../../data/data'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader"
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
`;

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
        <br />
        {cargando ? <div><br /><br /><BarLoader css={override} size={150} /></div> :
        <ItemDetail producto={producto} /> } 
        </>
        )
}

export default ItemDetailContainer