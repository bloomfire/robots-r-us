import React from 'react'

import data from '../data';

import Robot from '../components/Robot'
export default function Robots() {
    return (
        <div>
            {
                data.map(robot => <Robot robot={robot} />)
            }
        </div>
    )
}
