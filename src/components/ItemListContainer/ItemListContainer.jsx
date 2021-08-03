import "./ItemListContainer.css"
import ItemCount from "../Counter/ItemCount"

const ItemListContainer = ({greeting, item}) => {
    return <>
    <p>Hola {greeting}! Estás por comprar {item}</p>
    <ItemCount stock="5" initial="1" />
    </>
}

export default ItemListContainer