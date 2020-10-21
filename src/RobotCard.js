import React from 'react'

const RobotCard = (props) => {
    //deconstruct for every robot instance then generate display
    const {id, first_name, last_name, email, title, avatar} = props.robot;

    return (
        <div className='robotProfile'>
            <div key={id} className='robotCard'>
                <p>ID#{id}</p>
                <div className='avatar'> 
                {/* If no avatar supplied; then ternary fills in default avatar, can also be done by assigning default props*/}
                    <img src={avatar ? avatar : "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"} alt='robot avatar'/>
                </div>

                <div>
                  <p>{first_name}{last_name}</p>
                  <p>{title ? title : "No title yet.."}</p>
                  <p>{email ? email: "No email on file"}</p>
                </div>
            </div>
        </div>
    )
}

export default RobotCard