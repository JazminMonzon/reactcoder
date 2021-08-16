import React from "react"
import "./ItemList.css"
import Item from "../Item/Item.jsx"
import Remera from "../../images/remera.png"
import Taza from "../../images/taza.jpeg"
import Disco from "../../images/disco.jpeg"
import DiscoAbbey from "../../images/discoabbeyroad.jpeg"

export default function ItemList() {
    const items = [
        {
          id: '1',
          title: 'Remera Abbey Road',
          price: '$1000',
          description: 'Remera de algodón Abbey Road',
          stock: '5',
          pictureUrl: Remera,
        },
        {
          id: '2',
          title: 'Taza Revolver',
          price: '$500',
          description: 'Taza de cerámica Revolver',
          stock: '10',
          pictureUrl: Taza
        },
        {
          id: '3',
          title: 'Disco Please Please Me',
          price: '$1500',
          description: 'Disco de vinilo Please Please Me',
          stock: '2',
          pictureUrl: Disco
        },
        {
          id: '4',
          title: 'Disco Abbey Road',
          price: '$1500',
          description: 'Disco de vinilo Abbey Road',
          stock: '3',
          pictureUrl: DiscoAbbey
        }
      ]

    const ItemsList = items.map(item => ( <Item key={item.id} pictureUrl={item.pictureUrl} title={item.title} price={item.price} stock={item.stock} description={item.description} /> ));
    return(
        <>
            <div>
                {ItemsList}
            </div>
        </>
      );
}