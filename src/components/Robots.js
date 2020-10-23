import React from 'react'
import RobotCard from './RobotCard'
import data from '../data'

const Robots = () => {
    return (
        <div className="robots">
           {
                data.map(robot => 
                    <RobotCard key={robot.id} robot={robot}/>
                )
            }
        </div> 
    )
}

export default Robots
