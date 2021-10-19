import {useContext,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import UserIdContext from '../context/UserIdContext';
import '../styles/Style.css'

const User = () => {
    const {getUser,actual} = useContext(UserIdContext)
    const {id} = useParams()

    useEffect(() => {
        getUser(id)
    }, [id])

    return (
        <section className="infoUser byId">
            <article>
                <h2>Nombre de usuario: {actual.name}</h2>
                <h3>Email: {actual.email}</h3>
            </article>
        </section>
    )
}

export default User
