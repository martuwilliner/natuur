
const Cards = ({title,count}) => {

    return (
        <article>
            {title === 'Usuarios' ? <i class="fas fa-user"></i> : <i class="fas fa-shopping-cart"></i>}
            <h1>Total de {title}</h1>
            <p>{count}</p>
        </article>
    )
     }

export default Cards
