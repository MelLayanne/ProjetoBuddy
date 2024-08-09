import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Logo.png";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="hamburger"></span>
            </button>
            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to='/' className="">Home</Link></li>
                    <li><Link to='funcoes'>Funcoes</Link></li>
                    <li><Link to='/referencias'>Referências</Link></li>
                    <li><Link to='/componentes'>Componentes </Link></li>
                    <li><Link to='/sobre'>Sobre nós</Link></li>
                </ul>
            </nav>
            <div className="logo"></div>
        </header>
    );
}

export default Navbar;