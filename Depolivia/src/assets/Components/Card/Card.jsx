import React from 'react'

function Card({name,cargo,años}) {
  return (
      <div className="card" style={{margin:'0.5rem',width: '200px',backgroundColor: '#0c3f49', color:'white'}}>
        <img src="https://www.crearuncurriculum.com/wp-content/uploads/2020/01/Foto-CV-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nombre: {name}</h5>
        </div>
        <ul className="list-group list-group-flush" style={{backgroundColor: '#0c3f49'}}>
          <li className="list-group-item" style={{backgroundColor: '#0c3f49', color:'white'}}>Cargo: {cargo}</li>
          <li className="list-group-item" style={{backgroundColor: '#0c3f49',color:'white'}}>Edad: {años}</li>
        </ul>
        <button type="button" class="btn btn-outline-info">Actualizar</button>
        <button type="button" class="btn btn-outline-danger" style={{marginTop: '0.3rem'}}>Eliminar</button>
      </div>
    
  )
}

export default Card