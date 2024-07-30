import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postUser } from '../../Redux/Actions/action';

function CreateUser() {
const dispatch = useDispatch();
const [state, setState] = useState({
    type: "",
  firstname: "",
  lastname: " ",
  age: 0,
  email: "",
  password: ""
});
const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(postUser(state));
};

return (
  <div className="container mt-5">
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Tipo de Usuario</span>
        <input type="text" name="type" onChange={handleChange} className="form-control" placeholder="Ingrese tipo de usuari que desea crear" aria-label="Producto" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Nombre</span>
        <input type="text" name="firstname" onChange={handleChange} className="form-control" placeholder="Ingrese nombre de usuairo" aria-label="Categoria" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Apellido</span>
        <input type="text" name="lastname" onChange={handleChange} className="form-control" placeholder="Ingrese apellido del usuario" aria-label="Stock" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Edad</span>
        <input type="number" name="age" onChange={handleChange} className="form-control" placeholder="Ingrese edad de usuario" aria-label="Precio" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="Ingrese su email" aria-label="Precio" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Password</span>
        <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="Ingrese la contraseña" aria-label="Precio" />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">ENVIAR</button>
      </div>
    </form>
  </div>
);
}

export default CreateUser