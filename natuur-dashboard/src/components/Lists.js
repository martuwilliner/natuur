import React from 'react'
import { Link } from "react-router-dom";

const Lists = ({data}) => {
    return (
        <ul>
            {data.map(element =>
                <li>
                    {element.name ?<h3>{element.name}</h3>: null}
                    {element.email ? <p>{element.email}</p> : null}
                    {element.description ?<p className="productDescription">{element.description}</p>: null}
                    {element.category ?<p className="category">Categoría: {element.category.categoryName}</p> : null}
                    {element.images ?<img src={element.images} alt={element.name}/>: null}
                    {element.user_id ? <Link to={`/usuarios/${element.user_id}`}><i class="fas fa-info-circle"></i> </Link> :<Link to={`/productos/${element.product_id}`}><i class="fas fa-info-circle"></i></Link>}
                </li>
            )}
        </ul>
    )
}

export default Lists
