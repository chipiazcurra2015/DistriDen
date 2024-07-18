// Producto.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Producto() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/create/producto');
  };


  return (
    <div className=''>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleButtonClick}>Crear Producto</button>
      </div>
    </div>
  );
}

export default Producto;
