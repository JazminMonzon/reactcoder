import React from "react"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader"
import { css } from "@emotion/react";
import { db } from '../../firebase';

const override = css`
  display: block;
  margin: 0 auto;
`;

const ItemDetailContainer = () => {
  	const [producto, setProducto] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();
	
	const getItem = async (id) => {
		db.collection('items')
			.doc(id)
			.onSnapshot((producto) => {
				setProducto({...producto.data(), id: id})
				setIsLoading(false)
			});
	};

	useEffect(() => {
		setIsLoading(true);
		getItem(id);
	}, [id]);

  return ( 
	<>
	<br />
  	{isLoading ? <div><BarLoader css={override} size={150} /></div>
 	: <ItemDetail key={id} producto={producto} />};
	</>
  )

};


export default ItemDetailContainer