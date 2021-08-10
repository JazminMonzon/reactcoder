import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList.jsx"

const ItemListContainer = ({greeting, item}) => {
    return <>
    <p>Hola {greeting}! Estás por comprar {item}</p>
    <ItemList />
    </>
}

export default ItemListContainer