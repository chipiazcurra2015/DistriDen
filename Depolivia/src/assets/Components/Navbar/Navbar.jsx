import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../image/logo.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0c3f49', margin: '0px 0px 30px 0px', fontSize: '1.3rem' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <img src={logo} alt="Depolivia Logo" width="120px" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{ backgroundColor: '#037E84' }} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item border-bottom border-white" >
            <NavLink className="nav-link bi bi-cup-straw" to="/producto" style={({ isActive }) => ({ color: isActive ? 'black' : '#fff' })} >Producto</NavLink>
            </li>
            <li className="nav-item border-bottom border-white" >
            <NavLink className="nav-link bi bi-people-fill" to="/user" style={({ isActive }) => ({ color: isActive ? 'black' : '#fff' })}>Usuario</NavLink>
            </li>
            <li className="nav-item border-bottom border-white">
            <NavLink className="nav-link bi bi-person-arms-up" to="/clientes" style={({ isActive }) => ({ color: isActive ? 'black' : '#fff' })}>Cliente</NavLink>
            </li>
            <li className="nav-item border-bottom border-white">
            <NavLink className="nav-link bi bi-geo-alt" to="/ruta" style={({ isActive }) => ({ color: isActive ? 'black' : '#fff' })}>Ruta</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
            <button className="btn btn-outline-success" style={{ color: '#fff' }} type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
