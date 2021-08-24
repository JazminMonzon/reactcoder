import React from "react"
import "./ItemList.css"
import Item from "../Item/Item.jsx"
import data from '../../data/data.js'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader"
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
`;

const  ItemList = () => {

  const { category } = useParams()

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
 
  useEffect(()=>{
     const productos = () =>{
       return new Promise((resolve, reject)=>{
         setTimeout(()=>{
           resolve(data)
           console.log(data)
         }, 2000)
       })
     }
     productos().then((items)=>{
       if (category != null){
         const productosFiltrados = items.filter((producto) => producto.category === category)
         setProductos(productosFiltrados)
         setCargando(false)
       } else {
       setProductos(items)
       setCargando(false)
     }
  })
}, [category])
 
     return(
         <>
         <br />
         {cargando ? <div><BarLoader css={override} size={150} /></div> :
         productos.map((producto =>
         ( <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} stock={producto.stock} category={producto.category} pictureUrl={producto.pictureUrl} /> ))
         )}
         </>
         )
 }
 
 export default ItemList