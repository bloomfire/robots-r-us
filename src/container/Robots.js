import React from 'react'
import Robot from '../components/Robot.js'

function Robots({data}) {
   return (
      <div className="robots-grid">
         {
            data.sort((a, b) => {
               let nameA = a.last_name.toUpperCase()
               let nameB = b.last_name.toUpperCase()
               if (nameA < nameB) {
                  return -1
               }
               if (nameA > nameB) {
                  return 1
               }
               return 0
            })
            .map(robotData => <Robot key={robotData.id} robotData={robotData} />)
         }
      </div>
   )
}

export default Robots
