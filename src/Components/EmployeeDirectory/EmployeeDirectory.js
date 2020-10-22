import React, { Component } from 'react';
import FollowButton from '../FollowButton/FollowButton';
import data from '../../data.js';
import './EmployeeDirectory.css';

export default class EmployeeDirectory extends Component {
    render () {
        return (
            <section className="Employee_Info">
                {data.map(robot => {
                    return (
                        <div className="Employee_Card" key={robot.id}>
                            <img src={robot.avatar} alt="robot-profile"/>
                            <p id="name">{robot.first_name} {robot.last_name}</p>
                            <FollowButton/>
                            <p id="occupation">{robot.title}</p>
                            <p id="contact">{robot.email}</p>
                        </div>
                    );
                })}
            </section>
        );
    }
}