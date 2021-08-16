import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"

// ACA VA LA PROMESA

const getItems = () => {
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=beatles")
    .then(response => {
        return response.json()
    })
}

const ItemListContainer = () => {

    const [itemList, setItemList] = useState([])

    useEffect(async () => {
        const data = await getItems().catch(err => { 
            console.log(err)
        })
        console.log(data)
        const arr = []
        data.results.forEach(item => {
            arr.push(<ItemDetail key={item.id} title={item.title} price={item.price} />)
        })
        setItemList(arr)
    }, [])

    return <>
    <h3>Bienvenido a la tienda!</h3>
    <ItemList />
    {itemList}
    </>
}

export default ItemListContainer