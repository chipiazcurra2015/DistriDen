import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './View/Home/Home'
import Detail from './View/Detail/Detail'
import User from './View/User/User'
import Navbar from './assets/Components/Navbar/Navbar'
import Clientes from './assets/Components/Clientes/Clientes'
import Ruta from './assets/Components/Ruta/Ruta'
import Producto from './assets/Components/Producto/Producto'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/user' element={<User/>} />
        <Route path='/ruta' element={<Ruta/>}/>
        <Route path='/producto' element={<Producto/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
