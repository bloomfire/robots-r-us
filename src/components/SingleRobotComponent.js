import React from 'react';

const SingleRobotComponent = ({robot, followRobot}) => {
   const defaultImg = 'https://robohash.org/providentperspiciatiset.bmp?size=100x100&set=set1'

   const toggleButtonText = robot.following ? 'following' : 'follow';
   const toggleButtonClass = robot.following ? "btn following": "btn";
   const toggleTitleClass = robot.title ? 'title': "title null-title"
   const toggleImages = robot.avatar ? robot.avatar : defaultImg;
   const toggleTitleText = robot.title ? robot.title : 'No tittle provided';
   const toggleEmail = robot.email ? robot.email : 'No email provided';


   return (
     <div className="inner-wrapper">
         <img src={toggleImages} alt={robot.first_name}/>
         <div className="button-wrapper">
            <button onClick={() => followRobot(robot)} className={toggleButtonClass}>{toggleButtonText}</button>
         </div>
         <h2 className={toggleTitleClass}>{toggleTitleText}</h2>
         <p>{`${robot.first_name} ${robot.last_name}`}</p>
         <p>{toggleEmail}</p>
     </div> 
   )
}

export default SingleRobotComponent;