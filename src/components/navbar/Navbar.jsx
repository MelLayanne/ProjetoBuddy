import { Link } from "react-router-dom";
import React from 'react';
import "../../assets/logo.png";

function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-md  mx-auto p-2 md:p-6 lg:p-2 xl:p-2">
      <div className="container mx-auto flex items-center justify-between px-4">

      <div className="flex items-center">
        <div className="logo"><img src="../../assets/logo.png" alt="logo" /></div>
          </div>
       

        <nav>
          <ul className="flex space-x-4">
            <li>< Link to='/' className="hover:text-gray-300">Home</Link></li>
            <li>< Link to='funcoes' className="hover:text-gray-300">Funções</Link></li>
            <li>< Link to='/referencias' className="hover:text-gray-300">Referências</Link></li>
            <li>< Link to='/componentes' className="hover:text-gray-300">Componentes</Link></li>
            <li>< Link to='/sobre' className="hover:text-gray-300">Sobre Nós</Link></li>
            
          </ul>
        </nav>
       
      </div>
    </header>
  );
}

export default Header;