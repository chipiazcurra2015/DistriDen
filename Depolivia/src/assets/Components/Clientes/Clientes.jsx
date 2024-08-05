import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { putCliente, deleteCliente, getallCliente } from '../../../Redux/Actions/action';

function User() {
const allCliente = useSelector((state)=> state.allCliente)
const navigate = useNavigate();
const dispatch = useDispatch();

const [editForm, setEditForm] = useState({
  name: "",
  address: "",
  image:"",
});

useEffect(() => {
  dispatch(getallCliente());
}, [dispatch]);

const handleDelete = (id) => {
  if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
    dispatch(deleteCliente(id));
  }
};

const handlePut = () => {
  dispatch(putCliente(editForm));
};

const handleEditClick = (cliente) => {
  setEditForm({
    id: cliente.id,
    name: cliente.name,
    address: cliente.address,
    image: cliente.image
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
        {allCliente.length > 0 ? (
          allCliente.map((cliente) => (
            <div key={cliente.id} className="col-md-3 mb-3">
              <div className="card"> 
                <button
                  type="button"
                  onClick={() => handleDelete(cliente.id)}
                  className="btn-close custom-btn-close"
                ></button>

                <div className="card-body text-white bg-dark" >
                  <img src={cliente.image} alt="Imagen del cliente" className="card-img-top fixed-img-size" />
                  <h3 className="card-title">{cliente.name}</h3>
                  <h5 className="card-text">Dirección: {cliente.address}</h5>
                  <h5 className="card-text">ID: {cliente.id}</h5>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target={`#editModal${cliente.id}`}
                    onClick={() => handleEditClick(cliente)}
                  >
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  
                </div>
              </div>

              <div
                className="modal fade"
                id={`editModal${cliente.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Editar Cliente 
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
                      Dirección
                      </span>
                      <select
                      name="address"
                      value={editForm.address}
                      onChange={handleChange}
                      className="form-control"
                      aria-label="Tipo"
                      aria-describedby="basic-addon1"
                      >
                         <option value="" disabled>Seleccione nueva dirección</option>
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
                          <span className="input-group-text" id="basic-addon1">
                            Nombre de Cliente
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={editForm.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese nuevo años"
                            aria-label="nombre"
                            aria-describedby="basic-addon1"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text">Imagen</span>
                          <input
                            type="text"
                            name="firstname"
                            value={editForm.image}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese nueva imagen"
                            aria-label="imagen"
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
          <p>No hay clientes flaca gila</p>
        )}
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate('/create/cliente')}
        >
          CREAR CLIENTE
        </button>
      </div>
    </div>
  ); 
}

export default User