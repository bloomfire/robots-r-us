import React from 'react'

export default function Robot({ robot }) {
    const { first_name, last_name, email, title, avatar } = robot
    return (
        <div>
            <img src={avatar} alt={first_name} />
            <h3>{`${first_name} ${last_name} `}</h3>
            <button>Follow</button>
            <h4> {title}</h4>
            <h5> {email}</h5>
        </div>
    )
}
