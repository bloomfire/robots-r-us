import React, { useState } from 'react'

export default function Robot({ robot }) {
    const [following, setFollowing] = useState(false)
    const { first_name, last_name, email, title, avatar } = robot

    const handleOnClick = () => {
        setFollowing(!following)
    }
    return (
        <div className="robot-container">
            { //render image if url is present
                avatar ?
                    <img src={avatar} alt={first_name} />
                    :
                    null
            }
            <h3>{`${first_name} ${last_name} `}</h3>
            <button onClick={handleOnClick} className={following ? 'following' : ''}>
                {following ? 'Following' : 'Follow'}
            </button>
            <h4> {title}</h4>
            <h5> {email}</h5>
        </div>
    )
}
