import React, { useState } from 'react'

import data from '../data';

// import styles 
import '../styles/robots.css'

// import components
import Robot from '../components/Robot'

export default function Robots() {
    const [robots, setRobots] = useState(data) // make new copy of data

    const handleOnChange = e => {
        const sort = e.target.value
        if (sort === 'default') {
            setRobots(data)
        } else {
            const sortedRobots = [...robots].sort((a, b) => a[sort].localeCompare(b[sort]))
            setRobots(sortedRobots)
        }
    }
    return (
        <div>
            <select name="sort" onChange={handleOnChange}>
                <option value="default">Sort by</option>
                <option value="first_name">First Name</option>
                <option value="last_name">Last Name</option>
            </select>
            <div className="robots-container">
                {
                    robots.map(robot => <Robot key={robot.id} robot={robot} />)
                }
            </div>
        </div>
    )
}
