import React from 'react';
import { Container, Row } from 'react-bootstrap';
import data from '../data';
import RobotCard from './RobotCard';

const RobotList = () => {
    //sort robots by last name
    const sortedRobots=data.sort((a, b) => a.last_name.localeCompare(b.last_name));

    return (
        <Container>
            <Row>
                {sortedRobots.map((robot) => {
                    return (
                        <RobotCard robot={robot}/>
                    )
                })}
            </Row>
        </Container>
    )
}


export default RobotList;