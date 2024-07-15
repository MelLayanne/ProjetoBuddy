import { Link } from "react-router-dom"
import logo from "../../assets/Logo.png"

import "./Navbar.css"
function Navbar() {
    return (
        <header>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><Link to='/' className="">Funções</Link></li>
                    <li><Link to='/referencias'>Referências</Link></li>
                    <li><Link to='/componentes'>Componentes </Link></li>
                    <li><Link to=''>Sobre nós</Link></li></ul>
            </nav>
            <div className="logo"></div>
        </header>
    )

}

export default Navbar