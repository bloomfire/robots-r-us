import React from 'react'
import DynamicButton from './DynamicButton'


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

                <div className="profileName">
                  <p>{first_name} {last_name}</p>
                </div>
                  <p>{title ? title : "No title yet.."}<br/></p>
                  <p>{email ? (<a href={email}>{email}</a>) : ("No email on file")}<br/></p>
                <div>
                  <DynamicButton/>
                </div>
            </div>
        </div>
    )
}

export default RobotCard