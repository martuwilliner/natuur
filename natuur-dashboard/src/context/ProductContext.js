import {createContext,useState} from 'react'

const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const endpoint = "http://localhost:3100/api/products/";
            const request = await fetch(endpoint);
            const datas = await request.json();
            setProducts((products)=> datas);
        } catch (error) {
            console.clear();
            console.error(error);
        }

    }
    const data = {getProducts,products}
    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}
export {ProductProvider}
export default ProductContext