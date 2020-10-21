import React, { useState } from 'react';
import FollowBtn from '../FollowBtn/FollowBtn.component';
import {
  AvatarImg,
  EmployeeCardCtr,
  EmployeeName,
  EmployeeTitle,
  EmployeeEmail,
} from './EmployeeCard.styled';

const EmployeeCard = ({ employee }) => {
  const { avatar, first_name, last_name, title, email } = employee;
  const [isFollowed, setFollowed] = useState(false);
  const handleOnClick = () => {
    console.log('click');
    setFollowed(!isFollowed);
  };
  return (
    <EmployeeCardCtr>
      <AvatarImg avatarUrl={avatar ? avatar : null} />
      <EmployeeName>
        {first_name} {last_name}
      </EmployeeName>
      <FollowBtn handleClick={handleOnClick}>
        {isFollowed ? 'Following' : 'Follow'}
      </FollowBtn>
      {title ? <EmployeeTitle>{title}</EmployeeTitle> : null}
      {email ? <EmployeeEmail>{email}</EmployeeEmail> : null}
    </EmployeeCardCtr>
  );
};

export default EmployeeCard;
