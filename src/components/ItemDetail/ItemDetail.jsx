import "./ItemDetail.css"

export default function ItemDetail({ title, description, price, id }) {
    return(
        <div className='card'>
            <div className='card-body'>
            <div>{id}</div>
            <div className='card-title'>{title}</div>
            <div className='card-text'>{price}</div>
            <div>{description}</div>
        </div>
        </div>
    )
}