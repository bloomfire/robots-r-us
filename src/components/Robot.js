import React, { useState } from 'react'

import DefaultImage from '../assets/bloomfire-logo.png'
export default function Robot({ robot }) {
    const [following, setFollowing] = useState(robot.following || false)
    const { id, first_name, last_name, email, title, avatar } = robot

    const handleOnClick = (id) => {
        const robots = JSON.parse(localStorage.getItem('robots'))
        const index = robots.findIndex(robot => robot.id === id)
        robots[index].following = !following
        localStorage.setItem('robots', JSON.stringify(robots))
        setFollowing(!following)
    }
    return (
        <div className="robot-container">
            <img src={avatar || DefaultImage} alt={first_name} />
            <h3>{`${first_name} ${last_name} `}</h3>
            <button onClick={() => handleOnClick(id)} className={following ? 'following' : ''}>
                {following ? 'Following' : 'Follow'}
            </button>
            <h4> {title || 'Title...'}</h4>
            <h5> {email || 'Email...'}</h5>
        </div>
    )
}
