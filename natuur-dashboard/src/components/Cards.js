
const Cards = ({title,count}) => {

    return (
        <article>
            {title === 'Usuarios' ? <i className="fas fa-user"></i> : title === 'Productos' ? <i className="fas fa-shopping-cart"></i> : null}
            <h1>Total de {title}</h1>
            <p>{count}</p>
        </article>
    )
     }

export default Cards
