import React from 'react';
import { useState } from 'react';

const Button = ({ id }) => {

// useState hook to track button state from local storage to persist after refresh
const [followed, setFollowed] = useState((localStorage.getItem(id) || false))

const onClick = () => {
  setFollowed(!followed);
  localStorage.setItem(id, followed);
}
  return (
  <button 
    className={followed ? "button-followed" : "button-unfollowed"}
    id={id}
    onClick={onClick}
  >
    {followed ? "Following" : "Follow"}
  </button>
  )
};

export default Button;