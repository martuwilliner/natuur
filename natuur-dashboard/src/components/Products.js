import {useContext} from 'react';
import ProductContext from '../context/ProductContext';
import Lists from './Lists'
import '../styles/Lists.css';

const Products = () => {
    const {products} = useContext(ProductContext)
    

    return (
        <section>
            <article>
                <h2>Productos</h2>
                <Lists data={products.products} />
            </article>
        </section>
    )
}

export default Products
