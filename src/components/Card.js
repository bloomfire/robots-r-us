import React from "react";

//import styles and assets
import styled from "styled-components";

const Card = ({ avatar, primary, secondary, tertiary }) => {
  return (
    <Container>
      <Avatar>
        {avatar ? <img src={avatar} alt={primary} /> : <div>empty</div>}
      </Avatar>
      <Primary>{primary && primary}</Primary>
      <Button>Follow</Button>
      <Secondary>{secondary && secondary}</Secondary>
      <Tertiary>{tertiary && tertiary}</Tertiary>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: yellow;
  margin: 1em;
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

const Primary = styled.div``;

const Button = styled.button``;

const Secondary = styled.div``;

const Tertiary = styled.div``;

export default Card;
