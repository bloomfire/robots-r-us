import React from 'react';
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
  return (
    <EmployeeCardCtr>
      <p>employee card</p>
      <AvatarImg avatarUrl={avatar} />
      <EmployeeName>
        {first_name} {last_name}
      </EmployeeName>
      <FollowBtn>Follow</FollowBtn>
      {title ? <EmployeeTitle>{title}</EmployeeTitle> : null}
      {email ? <EmployeeEmail>{email}</EmployeeEmail> : null}
    </EmployeeCardCtr>
  );
};

export default EmployeeCard;
