import React from 'react'

import data from '../data';

// import styles 
import '../styles/robots.css'

// import components
import Robot from '../components/Robot'

export default function Robots() {
    return (
        <div className="robots-container">
            {
                data.map(robot => <Robot robot={robot} />)
            }
        </div>
    )
}
