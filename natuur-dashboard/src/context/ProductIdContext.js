import {createContext,useState} from 'react'

const ProductIdContext = createContext();
const ProductIdProvider = ({children}) => {
    const [actual, setActual] = useState([]);

   const getProduct = async (id) => {
    try {
        const endpoint = "http://localhost:3100/api/products/";
        const request = await fetch(endpoint);
        const datas = await request.json();
        const element = datas.products.find (product => product.product_id == id);
        setActual((actual) => element)
    } catch (error) {
        console.clear();
        console.error(error);
    }
}
    const data = {actual,getProduct}
    return <ProductIdContext.Provider value={data}>{children}</ProductIdContext.Provider>
}
export {ProductIdProvider}
export default ProductIdContext
