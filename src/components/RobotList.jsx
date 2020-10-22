import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import data from '../data';

const RobotList = () => {
    //sort robots by last name
    const sortedRobots = data.sort((a, b) => a.last_name.localeCompare(b.last_name));
    return (
        <Container>
            <Row>
                {sortedRobots.map((robot) => {
                    return (
                        <div key={robot.id} className="col-12 col-xl-3 col-lg-4 col-md-6">
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={robot.avatar ? robot.avatar : "https://robohash.org/voluptasveritatisdeserunt.jpg?size=100x100&set=set1"} alt={robot.last_name} />
                                    <Card.Title>
                                        <h4>{robot.first_name} {robot.last_name}</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        {robot.title ? <h5>{robot.title}</h5> : null}
                                        {robot.email ? <h6>{robot.email}</h6> : null}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </Row>
        </Container>
    )
}


export default RobotList;