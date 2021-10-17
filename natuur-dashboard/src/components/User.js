import {useContext} from 'react';
import UserContext from '../context/UserContext';

const User = () => {
    const {users} = useContext(UserContext)

    return (
        <section>
            <h2>{}</h2>
            
        </section>
    )
}

export default User
