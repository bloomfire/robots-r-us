import React, { useEffect, useState } from 'react';
import data from '../data';
import { RobotCardsWrapper, Button } from '../styles/index';


function RobotCards(){
    const [defaultAvatar, setAvatar] = useState();
    const [following, setFollowing] = useState([]);

    useEffect(() => {
       const robotIds = JSON.parse(localStorage.getItem('robotsIds')) || [];
       const avatar = data.find(robot => robot.avatar).avatar;
       setAvatar(avatar);
       setFollowing(robotIds)
      }, []);

    const followRobot = (robotId) => {
        let robotsIds = following.includes(robotId) ? following.filter(id => robotId !== id) : [...following, robotId];
        setFollowing(robotsIds);
        localStorage.setItem('robotsIds', JSON.stringify(robotsIds))
    }

    console.log(following)
    return(
        <RobotCardsWrapper>
            {data.map(robot => {
                let robotAvatar = robot.avatar ? robot.avatar : defaultAvatar;
                const isFollowingRobot = following.includes(robot.id);
                // console.log(robot)
                return(
                    <div className="robot_info_card" key={robot.id}>
                        <img src={robotAvatar} alt={`Avatar for ${robot.first_name}`} />
                        <h3>{robot.first_name} {robot.last_name}</h3>
                        <Button type="submit" onClick={() => followRobot(robot.id)}>
                            {isFollowingRobot ? 'Following' : 'Follow'}
                        </Button>
                        <p>{robot.title}</p>
                        <p>{robot.email}</p>
                    </div>
                )
            })}

        </RobotCardsWrapper>
    )
}


export default RobotCards;
