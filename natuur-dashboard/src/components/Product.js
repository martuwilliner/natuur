import {useContext,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductIdContext from '../context/ProductIdContext';

const Product = () => {
    const {getProduct,actual} = useContext(ProductIdContext)
    const {id} = useParams()

    useEffect(() => {
        getProduct(id)
    }, [])

    return (
        <section>
            <h2>{actual.name}</h2>
            <p>{actual.description}</p>
            <img src={actual.images} alt={actual.name} />
        </section>
    )
}

export default Product
