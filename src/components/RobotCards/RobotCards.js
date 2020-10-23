import React from "react";
import FollowButton from "../FollowButton/FollowButton";
import Wrapper from "../Wrapper/Wrapper"
import "./RobotCards.css";

function RobotCards(props) {
  return (
    <Wrapper>
    <div className="card">
      <div className="img-container">
        <img alt={props.firstname} src={props.avatar} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.firstname} {props.lastname} </strong> 
          </li>
          <li>
            <FollowButton /> 
          </li>
          <li>
            <strong>{props.email}</strong>
          </li>
          <li>
            <strong>{props.title}</strong> 
          </li>
        </ul>
      </div>
    </div>
    </Wrapper>
  );
}

export default RobotCards;