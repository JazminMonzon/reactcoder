import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"

// ACA VA LA LLAMADA A FIREBASE

const getItems = () => {
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=beatles")
    .then(response => {
        return response.json()
    })
}

const ItemDetailContainer = ({}) => {

    const [itemListDetail, setItemListDetail] = useState([])

    useEffect(async () => {
        const data = await getItems().catch(err => { 
            console.log(err)
        })
        console.log(data)
        const arr = []
        data.results.forEach(item => {
            arr.push(<ItemDetail key={item.id} title={item.title} description={item.description} price={item.price} />)
        })
        setItemListDetail(arr)
    }, [])

    return <>
    <p>Mira mas detalles</p>
    <ItemDetail />
    {itemListDetail}
    </>
}

export default ItemDetailContainer