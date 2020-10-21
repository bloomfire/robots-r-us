import React from 'react'

const RobotCard = (props) => {
    const {id, first_name, last_name, email, title, avatar} = props.robot;

    return (
        <div>
            <div key={id}>
              ID# {id}
            <img src={avatar ? avatar : "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"} alt='robot avatar'/>
                <div>
                  <p>{first_name}{last_name}</p>
                </div>
                  <p>{title ? title : "No title yet.."}</p>
                  <p>{email ? email: "No email on file"}</p>
            </div>
        </div>
    )
}

export default RobotCard