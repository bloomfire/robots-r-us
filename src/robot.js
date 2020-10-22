import React from 'react';
import './robot.css';
import { isNil } from 'lodash';

const Robot = props => {
  const handleFollow = () => {
    // to do
  }

  return <div>
    <div className='card'>
      <img src={isNil(props.avatar) ? '//robohash.org/4TO.png?set=set3&size=100x100' : props.avatar} alt={props.first_name + props.last_name}/>
      <h3>{props.first_name}{props.last_name}</h3>
      <button onClick={handleFollow}>Follow</button>
      <h4>{props.title}</h4>
      <p>{props.email}</p>
    </div>
  </div>
}

export default Robot;