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
                { products.products.map((product)=> <Lists product_id={product.product_id} name={product.name} category={product.category} description={product.description} images={product.images} />)}
            </article>
        </section>
    )
}

export default Products
