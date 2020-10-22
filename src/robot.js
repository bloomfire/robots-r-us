import React from 'react';
import './robot.css';

const Robot = props => {
  console.log(props);
  return <div>
    <div className='card'>
      <img src={props.avatar} alt={props.first_name + props.last_name}/>
      <h3>{props.first_name}{props.last_name}</h3>
      <button>Follow</button>
      <h4>{props.title}</h4>
      <p>{props.email}</p>
    </div>
  </div>
}

export default Robot;