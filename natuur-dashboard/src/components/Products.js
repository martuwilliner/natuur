import {useContext} from 'react';
import ProductContext from '../context/ProductContext';
import Lists from './Lists'

const Products = () => {
    const {products} = useContext(ProductContext)
    

    return (
        <section>
            <h2>Productos</h2>
            <Lists data={products.products} />
        </section>
    )
}

export default Products
