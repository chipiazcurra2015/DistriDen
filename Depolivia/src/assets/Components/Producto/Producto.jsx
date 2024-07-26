import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducto, deleteProducto, putProducto } from '../../../Redux/Actions/action';
import './Producto.css';

function Producto() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducto = useSelector((state) => state.allProducto);
  const [editForm, setEditForm] = useState({
    denomination: '',
    category: '',
    stock: 0,
    price: 0,
    image: ''
  });

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      dispatch(deleteProducto(id));
    }
  };

  const handlePut = () => {
    dispatch(putProducto(editForm));
  };

  const handleEditClick = (product) => {
    setEditForm({
      id: product.id,
      denomination: product.denomination,
      category: product.category,
      stock: product.stock,
      price: product.price,
      image: product.image
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
        {allProducto.length > 0 ? (
          allProducto.map((product) => (
            <div key={product.id} className="col-md-3 mb-3">
              <div className="card">
                <button
                  type="button"
                  onClick={() => handleDelete(product.id)}
                  className="btn-close custom-btn-close"
                ></button>
                <img
                  src={product.image}
                  className="card-img-top fixed-img-size"
                  alt={product.denomination}
                />
                <div className="card-body text-white bg-dark">
                  <h5 className="card-title">{product.denomination}</h5>
                  <p className="card-text">Categoría: {product.category}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <p className="card-text">Precio: ${product.price}</p>
                  <p className="card-text">ID: {product.id}</p>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target={`#editModal${product.id}`}
                    onClick={() => handleEditClick(product)}
                  >
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                </div>
              </div>

              <div
                className="modal fade"
                id={`editModal${product.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Editar Producto 
                      </h5>
                      <div>
                      <h6>Recuerda que por seguridad solo se puede modificar el stock y el precio del producto</h6>
                      </div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        {/* <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            Producto
                          </span>
                          <input
                            type="text"
                            name="denomination"
                            value={editForm.denomination}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Nombre de producto"
                            aria-label="Producto"
                            aria-describedby="basic-addon1"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            Categoría
                          </span>
                          <input
                            type="text"
                            name="category"
                            value={editForm.category}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese categoría"
                            aria-label="Categoría"
                            aria-describedby="basic-addon1"
                          />
                        </div> */}

                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            Stock
                          </span>
                          <input
                            type="number"
                            name="stock"
                            value={editForm.stock}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese Stock del producto"
                            aria-label="Stock"
                            aria-describedby="basic-addon1"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text">$</span>
                          <input
                            type="text"
                            name="price"
                            value={editForm.price}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese precio unitario del producto"
                            aria-label="Precio"
                          />
                        </div>

                        {/* <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            Imagen
                          </span>
                          <input
                            type="text"
                            name="image"
                            value={editForm.image}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ingrese imagen del producto"
                            aria-label="Imagen"
                            aria-describedby="basic-addon1"
                          />
                        </div> */}
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
          <p>No hay productos</p>
        )}
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate('/create/producto')}
        >
          CREAR PRODUCTO
        </button>
      </div>
    </div>
  );
}

export default Producto;
