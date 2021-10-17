import {useContext} from 'react';
import UserContext from '../context/UserContext';
import Lists from './Lists'
import '../styles/Users.css';

const Users = () => {
    const {users} = useContext(UserContext)
    
    return (
        <section>
            <article>
                <h2>Usuarios</h2>
                <Lists data={users.users} />
            </article>
        </section>
    )
}

export default Users
