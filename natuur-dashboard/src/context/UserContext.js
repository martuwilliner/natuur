import {createContext,useState} from 'react'

const UserContext = createContext();
const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const endpoint = "http://localhost:3100/api/users/";
            const request = await fetch(endpoint);
            const datas = await request.json();
            setUsers((users)=> datas);
        } catch (error) {
            console.clear();
            console.error(error);
        }
   }
    const data = {getUsers,users}
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
export {UserProvider}
export default UserContext
