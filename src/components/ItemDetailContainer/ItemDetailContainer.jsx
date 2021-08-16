import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import Remera from "../../images/remera.png"
import Taza from "../../images/taza.jpeg"
import Disco from "../../images/disco.jpeg"
import DiscoAbbey from "../../images/discoabbeyroad.jpeg"


const ItemDetailContainer = () => {

    const items = [
        {
          id: '1',
          title: 'Remera Abbey Road',
          price: '$1800',
          description: 'Remera 100% algodón estampada en vinilo termotransferible.',
          stock: '5',
          pictureUrl: Remera,
        },
        {
          id: '2',
          title: 'Taza Revolver',
          price: '$1000',
          description: 'Taza de porcelana apta microondas. Se vende por unidad.',
          stock: '10',
          pictureUrl: Taza
        },
        {
          id: '3',
          title: 'Disco Please Please Me',
          price: '$6800',
          description: 'Disco de vinilo Please Please Me. 180 grs.',
          stock: '2',
          pictureUrl: Disco
        },
        {
          id: '4',
          title: 'Disco Abbey Road',
          price: '$6800',
          description: 'Disco de vinilo Abbey Road. 180 grs.',
          stock: '3',
          pictureUrl: DiscoAbbey
        }
      ]

    const ItemsDetailList = items.map(item => ( <ItemDetail key={item.id} pictureUrl={item.pictureUrl} title={item.title} price={item.price} stock={item.stock} description={item.description} /> ));


    return <>
    <div>
        {ItemsDetailList}
    </div>
</>
}

export default ItemDetailContainer