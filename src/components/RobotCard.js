import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import FollowButton from './FollowButton';

const RobotCard = (props) => {
    const [following, setFollow]=useState(false);

    let updatedRobot;

    //get robot data from localStorage if any
    const localRobot = JSON.parse(localStorage.getItem(props.robot.id));
    if(localRobot) {
        // if robot data in localStorage, set it to updatedRobot
        updatedRobot= localRobot;
    } else {
        // if not, add following property to each robot
        updatedRobot={
            ...props.robot,
            following
        };
    }

    const [robot, setRobot] = useState(updatedRobot);

    useEffect(() => {
        setRobot(updatedRobot);
     }, []);

    // save robot data to local storage and update only when robot properties change
    useMemo(() => {
        localStorage.setItem(props.robot.id, JSON.stringify(robot));
    }, [robot]);

    //update following property on button click
    const handleClick=(follow)=>{
                                setFollow(follow); 
                                setRobot({
                                    ...robot,
                                    following: follow
                                })
                            };

    return (       
        <div key={robot.id}  className="col-12 col-xl-3 col-lg-4 col-md-6">
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={robot.avatar ? robot.avatar : "https://robohash.org/voluptasveritatisdeserunt.jpg?size=100x100&set=set1"} alt={robot.last_name}/>
                    <Card.Title>
                        <h4>{robot.first_name} {robot.last_name}</h4> 
                    </Card.Title>
                    <Card.Text>
                        <FollowButton onClick={handleClick} following={robot.following}/>
                        {robot.title? <h5>{robot.title}</h5> : null}
                        {robot.email? <h6>{robot.email}</h6> :null}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


export default RobotCard;