import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Esquinaflix</Link>
            <Link className='favoritos' to="/favoritos">MeusFilmes</Link>
        </header>
    )
}

export default Header;