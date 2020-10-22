import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import FollowButton from './FollowButton';

const RobotCard = (props) => {
    let robot=props.robot;
    const [following, setFollow]=useState(false);

    //handle button click
    const handleClick=(follow)=>setFollow(follow);

    return (       
        <div key={robot.id}  className="col-12 col-xl-3 col-lg-4 col-md-6">
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={robot.avatar ? robot.avatar : "https://robohash.org/voluptasveritatisdeserunt.jpg?size=100x100&set=set1"} alt={robot.last_name}/>
                    <Card.Title>
                        <h4>{robot.first_name} {robot.last_name}</h4> 
                    </Card.Title>
                    <Card.Text>
                        <FollowButton onClick={handleClick} following={following}/>
                        {robot.title? <h5>{robot.title}</h5> : null}
                        {robot.email? <h6>{robot.email}</h6> :null}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


export default RobotCard;