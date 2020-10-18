import React, { useState } from "react";
import data from "./data";
import { Card, ListGroup, Button } from "react-bootstrap";
import "./App.css";

const RobotList = () => {
  const [follow, setFollow] = useState("Follow");

  const handleClick = (e) => {
    e.preventDefault();
    setFollow("Following");
  };

  return (
    <div className="App">
      {data.map((robot) => {
        return (
          <div key={robot.id} className="robotCard">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <div className="nameText">
                    {robot.first_name} {robot.last_name}
                  </div>
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item id="card-email-text-color">
                    {robot.email ? (
                      <a href={robot.email}>{robot.email}</a>
                    ) : (
                      "No Email to display, robot probably fake"
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {robot.title ? robot.title : "No Purpose Yet Defined"}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Img
                  variant="bottom"
                  src={
                    robot.avatar
                      ? robot.avatar
                      : "https://i.imgur.com/CsQIkSE.jpg"
                  }
                />
                <div>
                  <Button
                    type="button"
                    variant="primary"
                    className="robot-follow-button"
                    onClick={handleClick}
                  >
                    {follow}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default RobotList;
