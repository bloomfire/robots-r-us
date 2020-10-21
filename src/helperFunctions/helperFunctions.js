export const updateRobotData = data => {
   const addFollowProperty = data.map(robot => {
      return {
         ...robot,
         following: false
      }
   });
   const sortByLastName = addFollowProperty.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
   return sortByLastName;
}