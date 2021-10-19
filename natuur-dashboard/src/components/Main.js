import {useContext,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Cards from './Cards';
import UserContext from '../context/UserContext';
import ProductContext from '../context/ProductContext';
import '../styles/Main.css';

const Main = () => {
    const {getUsers,users} = useContext(UserContext);
    const {getProducts,products} = useContext(ProductContext);

    useEffect(() => getUsers(), []);
    useEffect(() => getProducts(), []);
    
    return (
        <main>
            <section id="cards">
            <Link to="/usuarios">
                <Cards title="Usuarios" count={users.count} />
            </Link>
            <Link to="/productos">
                <Cards title="Productos" count={products.count} />
            </Link>
            </section>
        </main>
    )
}

export default Main
