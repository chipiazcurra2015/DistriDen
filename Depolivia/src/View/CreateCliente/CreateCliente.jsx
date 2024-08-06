import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getallZona, postCliente } from '../../Redux/Actions/action';

function CreateUser() {
const dispatch = useDispatch();
const zonas = useSelector((state) => state.allZona);

const [state, setState] = useState({
    name: "",
    address: "",
    image:"",
    zonaId: '',
});
useEffect(() => {
  dispatch(getallZona());
}, [dispatch]);
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
          <span className="input-group-text" id="basic-addon1">Zona</span>
          <select
            name="zonaId"
            onChange={handleChange}
            className="form-control"
            aria-label="Zona"
            aria-describedby="basic-addon1"
            value={state.zonaId}
          >
            <option value="" disabled>Seleccione una Zona</option>
            {zonas.map((zona) => (
              <option key={zona.id} value={zona.id}>
                {zona.localidad} - {zona.provincia}
              </option>
            ))}
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