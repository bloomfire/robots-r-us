import React from 'react';

const SingleRobotComponent = ({robot}) => {
   return (
     <div className="inner-wrapper">
         <img src={robot.avatar} alt={robot.first_name}/>
         <div className="button-wrapper">
            <button>follow</button>
         </div>
         <h2>{robot.title}</h2>
         <p>{`${robot.first_name} ${robot.last_name}`}</p>
         <p>{robot.email}</p>
     </div> 
   )
}

export default SingleRobotComponent;