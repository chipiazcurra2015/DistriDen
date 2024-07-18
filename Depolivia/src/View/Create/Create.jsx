import React, { useState } from 'react';

function Create() {
  const [state, setState] = useState({
    Producto: "",
    Categoria: "",
    Stock: "0",
    Precio: "0",
    Imagen: "",
  }); 

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    alert("Producto creado con éxito");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Producto</span>
          <input type="text" name="Producto" onChange={handleChange} className="form-control" placeholder="Nombre de producto" aria-label="Producto" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Categoria</span>
          <input type="text" name="Categoria" onChange={handleChange} className="form-control" placeholder="Ingrese categoría" aria-label="Categoria" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Stock</span>
          <input type="number" name="Stock" onChange={handleChange} className="form-control" placeholder="Ingrese Stock del producto" aria-label="Stock" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input type="text" name="Precio" onChange={handleChange} className="form-control" placeholder="Ingrese precio unitario del producto" aria-label="Precio" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Imagen</span>
          <input type="text" name="Imagen" onChange={handleChange} className="form-control" placeholder="Ingrese imagen del producto" aria-label="Imagen" aria-describedby="basic-addon1" />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">ENVIAR</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
