import React, { useState } from 'react'
import Avatar from './Avatar'
import FollowButton from './FollowButton'
import UnfollowButton from './UnfollowButton'

function Robot({robotData}) {

   const [following, followRobot] = useState(false)

   return (
      <div className="robot">
         <Avatar image={robotData.avatar}
                 first_name={robotData.first_name}
                 last_name={robotData.last_name}/>
         <br/>

         <b>{`${robotData.first_name} ${robotData.last_name}`}</b>
         <br/>

         <div className="following-button" onClick={() => followRobot(!following)}>
            {!following ? <FollowButton /> : <UnfollowButton />}
         </div>

         <i>{robotData.title || "No Title"}</i>
         <br/>
         
         {robotData.email || "No Email"}
      </div>
   )
}

export default Robot
