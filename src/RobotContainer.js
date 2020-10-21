import React from 'react'
import RobotCard from './RobotCard'

const RobotContainer = (props) => {
    return (
      <div className='robotContainer'>
        {props.robotsDisplay.map((robot, index) => <RobotCard key={index} robot={robot}/>)}
      </div>
    )
}

export default RobotContainer