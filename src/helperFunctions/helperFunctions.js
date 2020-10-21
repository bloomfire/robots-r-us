export const updateRobotData = data => {
   const addFollowProperty = data.map(robot => {
      return {
         ...robot,
         following: false
      }
   })
   return addFollowProperty;
}