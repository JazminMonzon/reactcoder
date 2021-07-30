import "./ItemListContainer.css"

const ItemListContainer = ({greeting, item}) => {
    return <>
    <p>Hola {greeting}! Estás por comprar {item}</p>
    </>
}

export default ItemListContainer