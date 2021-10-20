import {useContext,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Cards from './Cards';
import UserContext from '../context/UserContext';
import ProductContext from '../context/ProductContext';
import CategoryContext from '../context/CategoryContext';
import '../styles/Main.css';

const Main = () => {
    const {getUsers,users} = useContext(UserContext);
    const {getProducts,products} = useContext(ProductContext);
    const {getCategory,category} = useContext(CategoryContext);

    useEffect(() => getUsers(), []);
    useEffect(() => getProducts(), []);
    useEffect(() => getCategory(), []);
    
    return (
        <main>
            <section className="cards">
            <Link to="/usuarios">
                <Cards title="Usuarios" count={users.count} />
            </Link>
            <Link to="/productos">
                <Cards title="Productos" count={products.count} />
            </Link>
            </section>
            <section className="category">
            {category.map((cat)=>
                <Cards title={cat.name} count={cat.products} />
            )}
            </section>

        </main>
    )
}

export default Main
