import React from 'react';
import data from '../data';
import FollowButton from './FollowButton';
import './Employee.css';
import PlaceHolderAvatar from './placeholder-avatar.png';

class Employee extends React.Component {
    render() {
        return <div className='Employee'>{data.map(robot =>
            <div className='Employee-card'>
                <div>
                    <img className='avatar' src={robot.avatar || PlaceHolderAvatar} />
                </div>
                <h2>{robot.first_name} {robot.last_name}</h2>
                <FollowButton />
                <h3>{robot.title}</h3>
                <h4>{robot.email}</h4>
            </div>
        )} </div>;
    }
}

export default Employee;