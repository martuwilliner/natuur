import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/usuarios">Usuarios</Link>
                <Link to="/productos">Productos</Link>
            </nav>
        </header>
    )
}

export default Sidebar
