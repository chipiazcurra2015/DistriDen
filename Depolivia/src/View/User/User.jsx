import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getalluser, putUser } from '../../Redux/Actions/action';

function User() {
const allUser = useSelector((state)=> state.allUser)
const navigate = useNavigate();
const dispatch = useDispatch();

const [editForm, setEditForm] = useState({
  type: "",
  firstname: "",
  lastname: " ",
  age: 0,
  email: "",
  password: ""
});

useEffect(() => {
  dispatch(getalluser());
}, [dispatch]);

const handleDelete = (id) => {
  if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
    dispatch(deleteUser(id));
  }
};

const handlePut = () => {
  dispatch(putUser(editForm));
};

const handleEditClick = (user) => {
  setEditForm({
    id: user.id,
    type: user.type,
    firstname: user.firstname,
    lastname: user.lastname,
    age: user.age,
    email: user.email,
    password: user.password
  });
};

const handleChange = (e) => {
  setEditForm({
    ...editForm,
    [e.target.name]: e.target.value
  });
};

  return (
    <div className="container">
      <div className="row">
        {allUser.length > 0 ? (
          allUser.map((user) => (
            <div key={user.id} className="col-md-3 mb-3">
              <div className="card"> 
                <button
                  type="button"
                  onClick={() => handleDelete(user.id)}
                  className="btn-close custom-btn-close"
                ></button>

                <div className="card-body text-white bg-dark" >
                  <h3 className="card-title">{user.type}</h3>
                  <h4 className="card-text">Nombre: {user.firstname}</h4>
                  <h5 className="card-text">Apellido: {user.lastname}</h5>
                  <h5 className="card-text">Años: {user.age}</h5>
                  <h5 className="card-text">Email: {user.email}</h5>
                  <h5 className="card-text">ID: {user.id}</h5>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target={`#editModal${user.id}`}
                    onClick={() => handleEditClick(user)}
                  >
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  
                </div>
              </div>

              <div
                className="modal fade"
                id={`editModal${user.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Editar Usuario 
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                      Tipo
                      </span>
                      <select
                      name="type"
                      value={editForm.type}
                      onChange={handleChange}
                      className="form-control"
                      aria-label="Tipo"
                      aria-describedby="basic-addon1"
                      >
                      <option value="" disabled>Seleccione un tipo</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Vendedor">Vendedor</option>
                      <option value="Transportista">Transportista</option>
                      </select>
                      </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            Años
                          </span>
                          <input
                            type="number"
                            name="age"
                            value={editForm.age}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese nuevo años"
                            aria-label="Stock"
                            aria-describedby="basic-addon1"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text">Nombre</span>
                          <input
                            type="text"
                            name="firstname"
                            value={editForm.firstname}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese nueva contraseña"
                            aria-label="Precio"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">Apellido</span>
                          <input
                            type="text"
                            name="lastname"
                            value={editForm.lastname}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese nueva contraseña"
                            aria-label="Precio"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button
                        type="button"
                        onClick={handlePut}
                        className="btn btn-primary"
                      >
                        GUARDAR CAMBIOS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay usuarios</p>
        )}
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate('/create/user')}
        >
          CREAR USUARIO
        </button>
      </div>
    </div>
  ); 
}

export default User