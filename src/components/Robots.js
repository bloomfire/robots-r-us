import React from 'react'
import RobotCard from './RobotCard'
import data from '../data'

const Robots = () => {
    return (
        <div className="robots">
            {
            data
                .sort((a,b) => (a.last_name > b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0))
                .map(robot => 
                    <RobotCard key={robot.id} robot={robot}/>
            )}
        </div> 
    )
}

export default Robots
