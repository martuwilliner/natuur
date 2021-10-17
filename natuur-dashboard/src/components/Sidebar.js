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
                <Link to="/"><i class="fas fa-home"></i></Link>
                <Link to="/usuarios"><i class="fas fa-user"></i></Link>
                <Link to="/productos"><i class="fas fa-shopping-cart"></i></Link>
            </nav>
        </header>
    )
}

export default Sidebar
