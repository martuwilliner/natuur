import {useContext} from 'react';
import UserContext from '../context/UserContext';
import Lists from './Lists'

const Users = () => {
    const {users} = useContext(UserContext)
    
    return (
        <section>
            <h2>Usuarios</h2>
            <Lists data={users.users} />
        </section>
    )
}

export default Users
