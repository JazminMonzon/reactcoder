import React from "react"
import "./ItemList.css"
import Item from "../Item/Item.jsx"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader"
import { css } from "@emotion/react";
import { db } from '../../firebase';

const override = css`
  display: block;
  margin: 0 auto;
`;

const  ItemList = () => {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { category } = useParams();

	useEffect(() => {
		const getData = async () => {
			let ref = '';
			category
				? (ref = db.collection('items').where('category', '==', category))
				: (ref = db.collection('items'));

			ref.onSnapshot((querySnapshot) => {
				const docs = [];
				querySnapshot.forEach((doc) => {
					docs.push({ id: doc.id, ...doc.data() });
					setIsLoading(false);
				});
				setData(docs);
			});
		};

		setIsLoading(true);

		getData();
	}, [category]);
  
     return(
          <>
          <br />
            {isLoading ? <div><BarLoader css={override} size={150} /></div>
            : (
              data.map((data) => (
                <Item
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  price={data.price}
                  pictureUrl={data.pictureUrl}
                  category={data.category}
                />
              ))
            )}          
          </>
         )
 }
 
 export default ItemList