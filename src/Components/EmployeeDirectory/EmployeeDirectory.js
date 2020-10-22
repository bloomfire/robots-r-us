import React, { Component } from 'react';
import FollowButton from '../FollowButton/FollowButton';
import data from '../../data.js';
import './EmployeeDirectory.css';

export default class EmployeeDirectory extends Component {
    render () {
        const alphabeticalStore = data.sort((robotA, robotB) => {
            if (robotA.last_name < robotB.last_name) {
                return -1;
            }
            if (robotA.last_name > robotB.last_name) {
                return 1;
            }
            return data; 
        });

        return (
            <section className="Employee_Info">
                {alphabeticalStore.map(robot => {
                    if (robot.avatar === null) {
                        return (
                            <div className="Employee_Card" key={robot.id}>
                                <img src="https://robohash.org/rerumassumendaquaerat.jpg?size=100x100&set=set1" id="default-avi" alt="robot-profile"/>
                                <p id="name">{robot.first_name} {robot.last_name}</p>
                                <FollowButton/>
                                <p id="occupation">{robot.title}</p>
                                <p id="contact">{robot.email}</p>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="Employee_Card" key={robot.id}>
                                <img src={robot.avatar} alt="robot-profile" id="custom-avi"/>
                                <p id="name">{robot.first_name} {robot.last_name}</p>
                                <FollowButton/>
                                <p id="occupation">{robot.title}</p>
                                <p id="contact">{robot.email}</p>
                            </div>
                        );
                    }
                })}
            </section>
        );
    }
}