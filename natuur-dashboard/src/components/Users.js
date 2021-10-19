import {useContext} from 'react';
import UserContext from '../context/UserContext';
import Lists from './Lists'
import '../styles/Lists.css';

const Users = () => {
    const {users} = useContext(UserContext)
    
    return (
        <section>
            <article>
                <h2>Usuarios</h2>
               { users.users.map((user)=> 
               <Lists user_id={user.user_id} name={user.name} email={user.email} 
               />)}
            </article>
        </section>
    )
}

export default Users
