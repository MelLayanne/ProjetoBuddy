import { Routes, Route } from 'react-router-dom'
import Home from "../pages/home/Home"
import Componentes from '../pages/componentes/ComponentesP.jsx'

import Referencias from '../pages/referencias/Referencias.jsx'
import FuncoesS from '../pages/funcoes/FuncoesS.jsx'
import Sobre from '../pages/sobre/Sobre.jsx'

function Rotas() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/componentes" element={<Componentes />} />
                <Route path="/funcoes" element={<FuncoesS/>} />
                <Route path="/referencias" element={<Referencias />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>

        </>
    )
}

export default Rotas