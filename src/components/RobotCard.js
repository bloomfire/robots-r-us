import React from 'react'

const RobotCard = (props) => {
    // lets destructure data for clarity
    const {first_name,
        last_name,
        email,
        title,
        avatar} = props.robot
    return (
        <div className="robot-card">
            <h2>{`${first_name} ${last_name}`}</h2>
            <h3>{title}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default RobotCard
