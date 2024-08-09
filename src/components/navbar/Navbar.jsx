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
                    <li><a href="#funcoes"> Funções</a></li>
                    <li><a href="#referencias">Referências</a></li>
                    <li><a href="#componentes">Componente</a></li>
                    <li><a href="#sobre">Sobre nós</a> </li>
                </ul>
            </nav>
            <div className="logo"></div>
        </header>
    );
}

export default Navbar;