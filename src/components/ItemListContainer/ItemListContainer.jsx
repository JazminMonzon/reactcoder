import "./ItemListContainer.css"

const ItemListContainer = ({name, carrito}) => {
    return <>
    <p>Hola {name}! Estás por comprar {carrito}</p>
    </>
}

export default ItemListContainer