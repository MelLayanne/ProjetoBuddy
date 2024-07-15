import { Routes, Route } from 'react-router-dom'
import Home from "../pages/home/Home"
import Componentes from '../pages/componentes/Componentes'
import Funcoes from '../pages/funcoes/Funcoes'
import Referencias from '../pages/referencias/Referencias'

function Rotas() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/componentes" element={<Componentes />} />
                <Route path="/funcoes" element={<Funcoes />} />
                <Route path="/referencias" element={<Referencias />} />
            </Routes>

        </>
    )
}

export default Rotas