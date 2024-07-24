// Producto.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducto,deleteProducto } from '../../../Redux/Actions/action';
import './Producto.css';

function Producto() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducto = useSelector((state) => state.allProducto);

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        dispatch(deleteProducto(id));
    }
};
  return (
    <div className="container">
      <div className="row">
        {/* Mapea los productos y renderiza cada uno */}
        {allProducto.length > 0 ? (
          allProducto.map((product) => (
            <div className="col-md-3 mb-3">
              <div className="card">
                  <button type="button" onClick={() => handleDelete(product.id)} className="btn-close custom-btn-close"></button>
                <img src={product.image} className="card-img-top fixed-img-size" alt= {product.denomination}/>
                <div key={product.id} className="card-body text-white bg-dark">
                  <h5 className="card-title">{product.denomination}</h5>
                  <p className="card-text">Categoría: {product.category}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <p className="card-text">Precio: $ {product.price}</p>
                  <p className="card-text">ID:{product.id}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos</p> // Mensaje en caso de que no haya productos
        )}
      </div>
      <div className="mt-3">
        <button type="button" className="btn btn-primary" onClick={() => navigate('/create/producto')}>
          CREAR PRODUCTO
        </button>
      </div>
    </div>
  );
};

export default Producto
