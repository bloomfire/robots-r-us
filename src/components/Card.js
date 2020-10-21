import React from "react";

//import components
// import Button from "./Button";

//import styles and assets
import styled from "styled-components";

const Card = ({
  avatar,
  active,
  primary,
  secondary,
  tertiary,
  id,
  onClick,
}) => {
  return (
    <Container>
      <Avatar>
        {avatar ? <img src={avatar} alt={primary} /> : <EmptyAvatar />}
      </Avatar>
      <Primary>{primary && primary}</Primary>
      <Button id={id} onClick={() => onClick(id)}>
        {active ? <div>Unfollow</div> : <div>Follow</div>}
      </Button>
      <Secondary>{secondary && secondary}</Secondary>
      <Tertiary>{tertiary && tertiary}</Tertiary>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  img {
    background-color: darkolivegreen;
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const EmptyAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #dae8e6;
`;

const Primary = styled.h3``;

const Button = styled.button`
  border-radius: 25px;
  padding: 0 0.5em;
  background-color: #5ec4b8;
  outline: transparent;
  border: transparent;
  cursor: pointer;
`;
const Secondary = styled.h4``;

const Tertiary = styled.p``;

export default Card;
