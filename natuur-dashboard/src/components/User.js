import {useContext,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import UserIdContext from '../context/UserIdContext';

const User = () => {
    const {getUser,actual} = useContext(UserIdContext)
    const {id} = useParams()

    useEffect(() => {
        getUser(id)
    }, [id])

    return (
        <section>
            <h2>{actual.name}</h2>
            <p>{actual.email}</p>
        </section>
    )
}

export default User
