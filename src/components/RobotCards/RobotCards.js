import React from "react";
import FollowButton from "../FollowButton/FollowButton";
import Wrapper from "../Wrapper/Wrapper"
import "./RobotCards.css";

function RobotCards(props) {
  return (
    <Wrapper>
    <div className="card">
      <div className="img-container">
        <img alt={props.firstname} src={props.avatar  != null ? props.avatar : "https://i.ibb.co/yNz7yWL/a2863ef9df99f34890d48808610bb5fe.jpg"} />
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