import React, { useEffect, useState } from 'react';
import data from '../data';
import { RobotCardsWrapper, Button } from '../styles/index';


function RobotCards(){
    const [defaultAvatar, setAvatar] = useState();
    const [following, setFollowing] = useState([]);

    useEffect(() => {
       const avatar = data.find(robot => robot.avatar).avatar;
       setAvatar(avatar);
      }, []);

    const followRobot = (robotId) => {
        if(following.includes(robotId)){
            setFollowing(following.filter(id => robotId !== id));
            return;
        }
        setFollowing([...following, robotId]);
    }
    return(
        <RobotCardsWrapper>
            {data.map(robot => {
                let robotAvatar = robot.avatar ? robot.avatar : defaultAvatar;
                const isFollowingRobot = following.includes(robot.id);
                console.log(robot)
                return(
                    <div className="robot_info_card">
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
