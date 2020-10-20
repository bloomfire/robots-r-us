import React from 'react';
import data from '../data';
import FollowButton from './FollowButton';

class Employee extends React.Component {
    render() {
        return <div className='Employee'>{data.map(robot =>
            <div className='Employee-card'>
                <img className='avatar' src={robot.avatar} />
                <h2>{robot.first_name} {robot.last_name}</h2>
                <FollowButton />
                <h3>{robot.title}</h3>
                <h4>{robot.email}</h4>
            </div>
        )} </div>;
    }
}

export default Employee;