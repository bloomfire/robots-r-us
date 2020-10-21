import React, { useState } from 'react';
// import useLocalStorage from '../hooks/useLocalStorage';


const Button = ({ id }) => {

  const [followButtonState, setFollowButtonState] = useState('Follow')

  return (
  <button id={id} onClick={() => {console.log('button clicked', id)}}>{followButtonState}</button>
  )
};

export default Button;