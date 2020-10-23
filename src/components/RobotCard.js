import React, {useState} from 'react'

const RobotCard = (props) => {

    // Lets use this hook to preserve state in our component
    const [follow, setFollow] = useState(false)
    // lets destructure data for clarity
    const {first_name,
        last_name,
        email,
        title,
        avatar} = props.robot
    return (
        <div className="robot-card">
            <img className="robot-avatar" src={avatar ? avatar : 'https://icon-library.com/images/small-user-icon/small-user-icon-19.jpg'} alt='robot user icon'/>
            <h2>{`${first_name} ${last_name}`}</h2>
            <button className={follow ? 'followed' : null} onClick={() => {
                setFollow(!follow)
            }}>{follow ? 'Following' : 'Follow'}</button>
            <h3>{title}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default RobotCard
