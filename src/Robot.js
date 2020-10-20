import React from 'react';
import styled from 'styled-components';

const MainPhoto = styled.div`
  // outline: 2px solid blue;
  margin: 20px;
  width: 100%;
  color: red;
  background-color: blue;
`;


function Robot(props) { 
    console.log(props.robot)
    
    return (
      <MainPhoto>
      <div className="robot">
        <h2>{props.robot.first_name} {props.robot.last_name}</h2>
        <h3>Follow</h3>
        <h3>{props.robot.title}</h3>
        <h3>{props.robot.email}</h3>

      </div>
      </MainPhoto>

    );
}

export default Robot;
