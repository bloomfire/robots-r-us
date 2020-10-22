import React from 'react'
import Robot from './Robot'

function Robots({data}) {
   return (
      <div className="robots-grid">
         {console.log(data)}
         {data.map(rd => <Robot key={rd.id} robotData={rd} />)}
      </div>
   )
}

export default Robots
