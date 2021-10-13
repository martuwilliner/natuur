import React from 'react'
import { Link } from "react-router-dom";

const Lists = ({data}) => {
    return (
        <ul>
            {data.map(element =>
                <li>
                    {element.email ? <span>{element.name}</span>: null}
                    {element.email ? <span>{element.email}</span> : null}
                    {element.name ?<span>{element.name}</span>: null}
                    {element.description ?<span>{element.description}</span>: null}
                    {element.category ?<span>{element.category.categoryName}</span>: null}
                    {element.images ?<img src={element.images} alt={element.name}/>: null}
                    {element.user_id ? <Link to={`/usuarios/${element.user_id}`}>Ver más </Link> :<Link to={`/productos/${element.product_id}`}>Ver más </Link>}
                </li>
            )}
        </ul>
    )
}

export default Lists
