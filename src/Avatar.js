import React from 'react'

function Avatar({image, first_name, last_name}) {
   return (
      <>
      {
         image ?
         <img src={image} 
               alt={`${first_name} ${last_name} avatar`}></img> :
         <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/robot-head-2677164-2221813.png" 
               alt={`${first_name} ${last_name} avatar`}
               width="100px"
               height="100px"></img>
         }
      </>
   )
}

export default Avatar
