import {Link} from 'react-router-dom';
import '../styles/Sidebar.css';
import Logo from '../assets/logo.png'

const Sidebar = () => {
    return (
        <header>
            <figure>
                <Link to="/"><img src={Logo} alt=""/></Link>
            </figure>
            <nav>
                <Link to="/"><i className="fas fa-home"></i></Link>
                <Link to="/usuarios"><i className="fas fa-user"></i></Link>
                <Link to="/productos"><i className="fas fa-shopping-cart"></i></Link>
            </nav>
        </header>
    )
}

export default Sidebar
