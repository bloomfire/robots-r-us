import React from "react";

//import components
// import Button from "./Button";

//import styles and assets
import styled from "styled-components";

const Card = ({ avatar, active, primary, secondary, tertiary, onClick }) => {
  return (
    <Container>
      <Avatar>
        {avatar ? <img src={avatar} alt={primary} /> : <div>empty</div>}
      </Avatar>
      <Primary>{primary && primary}</Primary>
      <Button onClick={onClick}>
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

const Primary = styled.h4``;

const Button = styled.button`
  border-radius: 25px;
  padding: 0 0.5em;
  background-color: red;
  outline: transparent;
  border: transparent;
  cursor: pointer;
`;
const Secondary = styled.p``;

const Tertiary = styled.p``;

export default Card;
