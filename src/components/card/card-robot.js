import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";

import Avatar from "../avatar";

const RobotCard = ({ firstName, lastName, email, title, avatar, follow, clickFollow }) => {
  return (
    <CardContainer>
      <Avatar avatarUrl={avatar} avatarAlt={`${firstName} ${lastName}'s Avatar`} />
      <h2>
        {firstName} {lastName}
      </h2>
      <StyledButton follow={follow} onClick={clickFollow}>
        {follow ? "Following" : "Follow"}
      </StyledButton>
      <h3>{title}</h3>
      <p>{email}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 4px;
  width: 300px;
  margin: 24px;
  padding: 32px;
  background-color: ${colors.offWhite};
`;

const StyledButton = styled.button`
  background-color: ${({ follow }) => follow && colors.pastelGreen};
  box-shadow: 0 1px 1px rgba(63, 63, 68, 0.12), 0 2px 2px rgba(63, 63, 68, 0.12);
  border: none;
  font-size: 16px;
  padding: 8px 16px;
  width: 125px;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default RobotCard;
