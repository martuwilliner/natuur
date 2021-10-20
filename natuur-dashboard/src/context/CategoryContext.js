import {createContext,useState} from 'react'

const CategoryContext = createContext();
const CategoryProvider = ({children}) => {
    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        try {
            const endpoint = "http://localhost:3100/api/products/";
            const request = await fetch(endpoint);
            const datas = await request.json();
            setCategory((category)=> datas.countByCategory);
        } catch (error) {
            console.clear();
            console.error(error);
        }

    }
    const data = {getCategory,category}
    return <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>
}
export {CategoryProvider}
export default CategoryContext