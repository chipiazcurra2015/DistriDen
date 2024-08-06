import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postZona } from '../../Redux/Actions/action';

function CreateZona() {
const dispatch = useDispatch();
const [state, setState] = useState({
  localidad: "",
  provincia: "",
  codigoPostal:"",
});
const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(postZona(state));
};

return (
  <div className="container mt-5">
    <form onSubmit={handleSubmit}>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Localidad</span>
        <input type="text" name="localidad" onChange={handleChange} className="form-control" placeholder="Ingrese la localidad" aria-label="nombre" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Provincia</span>
        <input type="text" name="provincia" onChange={handleChange} className="form-control" placeholder="Ingrese Mendoza" aria-label="nombre" aria-describedby="basic-addon1" />
      </div>
    
      <div className="input-group mb-3">
        <span className="input-group-text">Código Postal</span>
        <input type="text" name="codigoPostal" onChange={handleChange} className="form-control" placeholder="Ingrese código postal" aria-label="codigo postal" />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">ENVIAR</button>
      </div>
    </form>
  </div>
);
}

export default CreateZona