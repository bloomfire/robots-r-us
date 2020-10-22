import React, { useEffect } from 'react';
import { useState } from 'react';

const Button = ({ id }) => {

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