import React, { useState } from "react";
import data from "./data";
import { Jumbotron, Container, Col } from "react-bootstrap";
import "./App.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function App() {
  const [follow, setFollow] = useState(null);

  function following() {
    setFollow(!follow);
  }

  return (
    <div id="data">
      <Jumbotron className="Jumbotron-background" fluid>
        <h1 className="PTitle" data-text="datas">
          Robots-R-Us
        </h1>
        <Container className="data-container">
          {data.map((data) => (
            <Col>
              <div className="card">
                {data.title ? (
                  <div className="title">{data.title}</div>
                ) : (
                  <div className="title">Amazing title</div>
                )}
                {data.avatar ? (
                  <div className="card-image">
                    <img src={data.avatar} alt="" />
                  </div>
                ) : (
                  <div className="card-image2">
                    <img
                      alt=""
                      src="https://lh3.googleusercontent.com/proxy/7LrL-tK-ToD0q0H7dwS3-Sh4CjxyMXTeewNvtcXuirxWNNAo38VqW_CcqNJ0CtHZ_sntZxrJp-q69vPiSvoL8tk1PszpC2xDlQ"
                    />
                  </div>
                )}

                <div className="card-text">
                  <h2>Name:{data.first_name && data.last_name}</h2>
                  {data.email ? <p>Email:{data.email}</p> : null}
                </div>

                {follow ? (
                  <div className="like-container">
                    <ThumbUpIcon
                      onClick={() => following()}
                      style={{ fill: "black" }}
                    />
                  </div>
                ) : (
                  <div className="like-container">
                    <ThumbUpIcon
                      onClick={() => following()}
                      style={{ fill: "blue" }}
                    />
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Container>
      </Jumbotron>
    </div>
  );
}

// <div className="App">
//   <h1>Robots-R-Us</h1>
//   {/* {data.map(robot => ...)} */}
// </div>

export default App;
