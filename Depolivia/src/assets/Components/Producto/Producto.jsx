// Producto.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducto } from '../../../Redux/Actions/action';

function Producto() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducto = useSelector((state) => state.allProducto);

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div className=''>
      {/* Mapea los productos y renderiza cada uno */}
      {allProducto.length > 0 ? (
        allProducto.map((product) => (
          <div key={product.id} className='product-card'>
            <h2>{product.denomination}</h2>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.denomination} />
          </div>
        ))
      ) : (
        <p>No hay productos</p> // Mensaje en caso de que no haya productos
      )}
      <div>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/create/producto')}>
          Crear Producto
        </button>
      </div>
    </div>
  );
}

export default Producto;
