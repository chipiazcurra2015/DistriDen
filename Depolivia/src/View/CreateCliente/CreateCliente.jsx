import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postCliente } from '../../Redux/Actions/action';

function CreateUser() {
const dispatch = useDispatch();
const [state, setState] = useState({
    name: "",
    address: "",
    image:"",
});
const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(postCliente(state));
};

return (
  <div className="container mt-5">
    <form onSubmit={handleSubmit}>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Nombre</span>
        <input type="text" name="name" onChange={handleChange} className="form-control" placeholder="Ingrese nombre de Cliente" aria-label="nombre" aria-describedby="basic-addon1" />
      </div>
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Dirección</span>
        <select
          name="address"onChange={handleChange}className="form-control"aria-label="Tipo de Usuario"aria-describedby="basic-addon1"value={state.address}>
          <option value="" disabled>Seleccione dirección del Cliente</option>
          <option value="Agrelo">Agrelo</option>
          <option value="Cacheuta">Cacheuta</option>
          <option value="Carrodilla">Carrodilla</option>
          <option value="Chacras de Coria">Chacras de Coria</option>
          <option value="Ciudad">Ciudad</option>
          <option value="El Carrizal">El Carrizal</option>
          <option value="Industrial">Industrial</option>
          <option value="La Puntilla">La Puntilla</option>
          <option value="Las Compuertas">Las Compuertas</option>
          <option value="Mayor Drummond">Mayor Drummond</option>
          <option value="Perdriel">Perdriel</option>
          <option value="Potrerillos">Potrerillos</option>
          <option value="Ugarteche">Ugarteche</option>
          <option value="Vertientes del Pedemonte">Vertientes del Pedemonte</option>
          <option value="Vistalba">Vistalba</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Imagen</span>
        <input type="text" name="image" onChange={handleChange} className="form-control" placeholder="Ingrese foto del Cliente" aria-label="image" />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">ENVIAR</button>
      </div>
    </form>
  </div>
);
}

export default CreateUser