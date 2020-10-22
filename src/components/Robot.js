import React, { useState } from 'react'

import DefaultImage from '../assets/bloomfire-logo.png'
export default function Robot({ robot }) {
    const [following, setFollowing] = useState(false)
    const { first_name, last_name, email, title, avatar } = robot

    const handleOnClick = () => {
        setFollowing(!following)
    }
    return (
        <div className="robot-container">
            <img src={avatar || DefaultImage} alt={first_name} />
            <h3>{`${first_name} ${last_name} `}</h3>
            <button onClick={handleOnClick} className={following ? 'following' : ''}>
                {following ? 'Following' : 'Follow'}
            </button>
            <h4> {title || 'Title...'}</h4>
            <h5> {email || 'Email...'}</h5>
        </div>
    )
}
