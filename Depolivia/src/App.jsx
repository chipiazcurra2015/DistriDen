import './App.css'
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import Home from './View/Home/Home'
import User from './View/User/User'
import Navbar from './assets/Components/Navbar/Navbar'
import Clientes from './assets/Components/Clientes/Clientes'
import Ruta from './assets/Components/Ruta/Ruta'
import Producto from './assets/Components/Producto/Producto'
import Create from './View/Create/Create'
import CreateUser from './View/CreateUser/CreateUser'
import Login from './View/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/user' element={<User/>} />
        <Route path='/ruta' element={<Ruta/>}/>
        <Route path='/producto' element={<Producto/>}/>
        <Route path='/create/producto' element={<Create/>}/>
        <Route path='/create/user' element={<CreateUser/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
