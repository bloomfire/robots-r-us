import React from "react";
import data from "./data";
import { Card } from "react-bootstrap";
import "./App.css";

const RobotList = () => {
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
                <Card.Img
                  variant="bottom"
                  src={
                    robot.avatar
                      ? robot.avatar
                      : "https://i.imgur.com/CsQIkSE.jpg"
                  }
                />
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

            <div>{robot.email}</div>
            <div>{robot.title ? robot.title : "No Purpose Yet Defined"}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RobotList;
