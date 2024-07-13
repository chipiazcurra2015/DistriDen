import React from 'react'
import Card from '../Card/Card'

function Cards({info}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{'--bs-gutter-x': '0.8rem' }}>
      {
        info.map(u => <Card key={u.años} name={u.name} cargo={u.cargo} años={u.años}/>)
      }
    </div>
  )
}

export default Cards