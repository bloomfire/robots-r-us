import React from 'react'

function Robot({robotData}) {
   return (
      <div className="robot">

         {
            robotData.avatar ?
            <img src={robotData.avatar} 
                 alt={`${robotData.first_name} ${robotData.last_name} avatar`}></img> :
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/robot-head-2677164-2221813.png" 
                 alt={`${robotData.first_name} ${robotData.last_name} avatar`}
                 width="100px"
                 height="100px"></img>
            
         }
         <br/>
         {robotData.first_name + robotData.last_name}
         <br/>
         Follow
         <br/>
         {robotData.title || "No Title"}
         <br/>
         {robotData.email}
      </div>
   )
}

export default Robot
