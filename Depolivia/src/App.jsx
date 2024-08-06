import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './View/Home/Home';
import User from './View/User/User';
import Navbar from './assets/Components/Navbar/Navbar';
import Clientes from './assets/Components/Clientes/Clientes';
import Ruta from './assets/Components/Ruta/Ruta';
import Producto from './assets/Components/Producto/Producto';
import Create from './View/Create/Create';
import CreateUser from './View/CreateUser/CreateUser';
import Login from './View/Login/Login';
import PrivateRoute from './View/PrivateRoute/PrivateRoute';
import Ventas from './assets/Components/Ventas/Ventas';
import CreateCliente from './View/CreateCliente/CreateCliente';
import CreateZona from './View/CreateZona/CreateZona';
import Zona from './assets/Components/Zona/Zona';

function App() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} />
        <Route path='/home' element={<PrivateRoute element={Home} />} />
        <Route path='/clientes' element={<PrivateRoute element={Clientes} />} />
        <Route path='/zona' element={<PrivateRoute element={Zona} />} />
        <Route path='/ventas' element={<PrivateRoute element={Ventas} />} />
        <Route path='/user' element={<PrivateRoute element={User} />} />
        <Route path='/ruta' element={<PrivateRoute element={Ruta} />} />
        <Route path='/producto' element={<PrivateRoute element={Producto} />} />
        <Route path='/create/producto' element={<PrivateRoute element={Create} />} />
        <Route path='/create/user' element={<PrivateRoute element={CreateUser} />} />
        <Route path='/create/cliente' element={<PrivateRoute element={CreateCliente} />} />
        <Route path='/create/zona' element={<PrivateRoute element={CreateZona} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
