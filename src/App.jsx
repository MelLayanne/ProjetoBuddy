import { BrowserRouter } from "react-router-dom"
import Rotas from "./rotas/Rotas"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Rotas />
    </BrowserRouter>
  )
}

export default App

