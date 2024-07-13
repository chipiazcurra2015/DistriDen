import React from 'react'
import Cards from '../../assets/Components/Cards/Cards'

function User() {
  const arr = [{name:"lucas",cargo:"administrativo",años: 34},
    {name:"gaby",cargo:"repsitor",años: 18},
    {name:"belen",cargo:"empleado",años: 40},
    {name:"loco",cargo:"jefe",años: 50},
    {name:"andrea",cargo:"proveedor",años: 24},
    {name:"Jimena",cargo:"repósitor",años: 19},
    {name:"Jimena",cargo:"repósitor",años: 2},
    {name:"Jimena",cargo:"repósitor",años: 41},
    {name:"Jimena",cargo:"repósitor",años: 43},
    {name:"Jimena",cargo:"repósitor",años: 44},
    {name:"Jimena",cargo:"repósitor",años: 12},
    {name:"Jimena",cargo:"repósitor",años: 9},
    {name:"Eliana",cargo:"proveedor",años: 80},
  ]
  return (
       <div>
      <Cards info={arr}/>
    </div>
  )
}

export default User