import React, { useState } from 'react';
import './robot.css';
import { isNil } from 'lodash';

const Robot = props => {
  const [isFollowing, setIsfollowing] = useState(false);
  const handleFollow = () => {
    setIsfollowing(!isFollowing);
  }

  const following = isFollowing ? 'Following' : 'Follow';
  return <>
    <div className='card'>
      <img src={isNil(props.avatar) ? '//robohash.org/4TO.png?set=set3&size=100x100' : props.avatar} alt={props.first_name + props.last_name} />
      <h3>{props.first_name} {props.last_name}</h3>
      <button onClick={handleFollow} className={following}>{following}</button>
      <h4>{props.title}</h4>
      <p>{props.email}</p>
    </div>
  </>
}

export default Robot;
