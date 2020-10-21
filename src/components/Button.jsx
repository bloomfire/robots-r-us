import React from 'react';
// import useLocalStorage from '../hooks/useLocalStorage';


const Button = ({ id }) => {

  return (
    <button id={id} onClick={() => {console.log('button clicked', id)}}></button>
  )
};

export default Button;