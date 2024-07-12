import logo from "../../assets/Logo.png"

import "./Navbar.css"
function Navbar() {
    return (
        <header>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li>Funções</li>
                    <li>Referências</li>
                    <li>Componentes</li>
                    <li>Sobre nós</li></ul>
            </nav>
            <div className="logo"></div>
        </header>
    )

}

export default Navbar