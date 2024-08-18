import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex items-center justify-between absolute w-full px-12 z-10 h-auto">
            <img src={logo} alt="Logo" className="w-52" />
            <button
                className={`md:hidden flex flex-col justify-between w-8 h-8 bg-transparent border-none cursor-pointer z-20 transition-transform duration-300 ease-linear ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span className={`block w-8 h-0.5 bg-gray-300 rounded-md transition-transform duration-300 ease-linear ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-gray-300 rounded-md transition-transform duration-300 ease-linear ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-gray-300 rounded-md transition-transform duration-300 ease-linear ${isOpen ? 'rotate-[-45deg] -translate-y-2' : ''}`}></span>
            </button>
            <nav className={`fixed top-0 right-0 h-screen w-full bg-black bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} p-8 z-20 md:hidden`}>
                <button
                    className="absolute top-4 right-4 text-white text-3xl"
                    onClick={toggleMenu}
                >
                    &times;
                </button>
                <ul className="flex flex-col items-center space-y-6 mt-16">
                    <li><Link to='/' className="text-white text-2xl">Home</Link></li>
                    <li><Link to='funcoes' className="text-white text-2xl">Funções</Link></li>
                    <li><Link to='/referencias' className="text-white text-2xl">Referências</Link></li>
                    <li><Link to='/componentes' className="text-white text-2xl">Componentes</Link></li>
                    <li><Link to='/sobre' className="text-white text-2xl">Sobre nós</Link></li>
                </ul>
            </nav>
            {/* Versão Desktop */}
            <nav className="hidden md:flex md:flex-row md:items-center md:justify-between md:w-auto md:bg-transparent md:static md:h-auto">
                <ul className="flex flex-row md:space-x-8">
                    <li><Link to='/' className="text-white text-base">Home</Link></li>
                    <li><Link to='funcoes' className="text-white text-base">Funções</Link></li>
                    <li><Link to='/referencias' className="text-white text-base">Referências</Link></li>
                    <li><Link to='/componentes' className="text-white text-base">Componentes</Link></li>
                    <li><Link to='/sobre' className="text-white text-base">Sobre nós</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
