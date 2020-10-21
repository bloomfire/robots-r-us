import React from 'react';
import { FollowButton } from './FollowBtn.styled';

const FollowBtn = (props) => (
  <FollowButton
    onClick={() => props.handleClick()}
    following={props.children === 'following'}
  >
    {props.children}
  </FollowButton>
);

export default FollowBtn;
