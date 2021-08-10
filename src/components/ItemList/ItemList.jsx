import React from "react"
import "./ItemList.css"
import Item from "../Item/Item.jsx"
import Remera from "../../images/remera.png"
import Taza from "../../images/taza.jpeg"
import Disco from "../../images/disco.jpeg"

export default function ItemList() {
    const items = [
        {
          id: '1',
          title: 'Remera Abbey Road',
          price: '$1000',
          pictureUrl: Remera,
          stock: '5',
          isValid: true
        },
        {
          id: '2',
          title: 'Taza Revolver',
          price: '$500',
          stock: '10',
          pictureUrl: Taza
        },
        {
          id: '3',
          title: 'Disco Please Please Me',
          price: '$1500',
          stock: '2',
          pictureUrl: Disco
        },
      ]

    const getItem = (id = null) => {
        console.log('Waiting for response...');
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const item = items.find(item => item.id === id);
            if (item != null) resolve(item);
            reject({
              status: 404
            });
          }, 2000);
        });
      };

    const myPromise = new Promise(async (resolve, reject) => {
        const item = await getItem('1').catch(
          err => reject(err)
        );
        item?.isValid ? resolve(item) : reject('Not valid');
    });

    myPromise.then(result => console.log(result)).catch(err => console.log(err));

    const ItemsList = items.map(item => ( <Item key={item.id} pictureUrl={item.pictureUrl} title={item.title} price={item.price} stock={item.stock} /> ));

    return(
        <>
            <div className='card'>
                {ItemsList}
            </div>
        </>
      );
}