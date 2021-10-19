import {createContext,useState} from 'react'

const UserIdContext = createContext();
const UserIdProvider = ({children}) => {
    const [actual, setActual] = useState([]);

   const getUser = async (id) => {
    try {
        const endpoint = "http://localhost:3100/api/users/";
        const request = await fetch(endpoint);
        const datas = await request.json();
        const element = datas.users.find (user => user.user_id == id);
        setActual((actual) => element)
    } catch (error) {
        console.clear();
        console.error(error);
    }
}
    const data = {actual,getUser}
    return <UserIdContext.Provider value={data}>{children}</UserIdContext.Provider>
}
export {UserIdProvider}
export default UserIdContext
