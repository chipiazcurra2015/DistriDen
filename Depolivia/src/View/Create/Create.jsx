import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postProducto } from '../../Redux/Actions/action';

function Create() {
  const dispatch = useDispatch(); 
  const [state, setState] = useState({
    denomination: "",
    category: "",
    stock: "0",
    price: "0",
    image: "",
  }); 

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postProducto (state));
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Producto</span>
          <input type="text" name="denomination" onChange={handleChange} className="form-control" placeholder="Nombre de producto" aria-label="Producto" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Categoria</span>
          <input type="text" name="category" onChange={handleChange} className="form-control" placeholder="Ingrese categoría" aria-label="Categoria" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Stock</span>
          <input type="number" name="stock" onChange={handleChange} className="form-control" placeholder="Ingrese Stock del producto" aria-label="Stock" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input type="text" name="price" onChange={handleChange} className="form-control" placeholder="Ingrese precio unitario del producto" aria-label="Precio" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Imagen</span>
          <input type="text" name="image" onChange={handleChange} className="form-control" placeholder="Ingrese imagen del producto" aria-label="Imagen" aria-describedby="basic-addon1" />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">ENVIAR</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
