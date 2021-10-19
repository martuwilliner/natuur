import React from 'react'
import { Link } from "react-router-dom";

const Lists = ({user_id,email,name,product_id,description,category,images}) => {
    return (
        <ul>
                <li>
                    {name ?<h3>{name}</h3>: null}
                    {email ? <p>{email}</p> : null}
                    {description ?  (<details><summary>Detalle</summary><p className="productDescription">{description}</p></details>): null}
                    {category ?<p className="category">Categoría: {category.categoryName}</p> : null}
                    {images ?<img src={images} alt={name}/>: null}
                    {user_id ? <Link to={`/usuarios/${user_id}`}><i className="fas fa-info-circle"></i> </Link> :<Link to={`/productos/${product_id}`}><i className="fas fa-info-circle"></i></Link>}
                </li>
            
        </ul>
    )
}

export default Lists
