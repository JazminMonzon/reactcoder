import "./ItemListContainer.css"
import ItemCount from "../Counter/ItemCount"

const ItemListContainer = ({greeting, item}) => {
    return <>
    <p>Hola {greeting}! Estás por comprar {item}</p>
    <ItemCount stock={10} initial={1} onAdd={() => alert("Agregado exitosamente al carrito") } />
    </>
}

export default ItemListContainer