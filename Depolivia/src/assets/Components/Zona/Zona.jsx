import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getallZona, deleteZona, putZona } from '../../../Redux/Actions/action';

function User() {
const allZona = useSelector((state)=> state.allZona)
const navigate = useNavigate();
const dispatch = useDispatch();

const [editForm, setEditForm] = useState({
    localidad: "",
    provincia: "",
    codigoPostal:"",
});

useEffect(() => {
  dispatch(getallZona());
}, [dispatch]);

const handleDelete = (id) => {
  if (window.confirm('¿Estás seguro de que deseas eliminar la zona?')) {
    dispatch(deleteZona(id));
  }
};

const handlePut = () => {
  dispatch(putZona(editForm));
};

const handleEditClick = (zona) => {
  setEditForm({
    id: zona.id,
    localidad: zona.localidad,
    provincia: zona.provincia,
    codigoPostal: zona.codigoPostal
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
        {allZona.length > 0 ? (
          allZona.map((zona) => (
            <div key={zona.id} className="col-md-3 mb-3">
              <div className="card"> 
                <button
                  type="button"
                  onClick={() => handleDelete(zona.id)}
                  className="btn-close custom-btn-close"
                ></button>

                <div className="card-body text-white bg-dark" >
                  <h3 className="card-title">{zona.localidad}</h3>
                  <h5 className="card-text">{zona.provincia}</h5>
                  <h5 className="card-text"> Código Postal: {zona.codigoPostal}</h5>
                  <h5 className="card-text">ID: {zona.id}</h5>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target={`#editModal${zona.id}`}
                    onClick={() => handleEditClick(zona)}
                  >
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  
                </div>
              </div>

              <div
                className="modal fade"
                id={`editModal${zona.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Editar Zona 
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
                      Localidad
                      </span>
                      <input
                      name="localidad"
                      value={editForm.localidad}
                      onChange={handleChange}
                      className="form-control"
                      aria-label="Tipo"
                      aria-describedby="basic-addon1"
                      >
                      </input>
                      </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            Provincia
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={editForm.provincia}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese provincia"
                            aria-label="nombre"
                            aria-describedby="basic-addon1"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text">Código Postal</span>
                          <input
                            type="number"
                            name="codigoPostal"
                            value={editForm.codigoPostal}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese nuevo CP"
                            aria-label="CP"
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
          <p>No hay zona creada</p>
        )}
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate('/create/zona')}
        >
          CREAR ZONA
        </button>
      </div>
    </div>
  ); 
}

export default User