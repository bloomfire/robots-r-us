import React, { useState } from "react";
import data from "./data";
// components
import Card from "./components/Card";
// style
import "./App.css";

function App() {
  // chose Set as data structure due to its search efficiency
  const [follows, setFollows] = useState(new Set());

  const handleFollowClick = (id) => {
    const newFollows = new Set(follows);

    // delete id from set if value is found, otherwise add it to set
    // delete method returns false if value is not found
    !newFollows.delete(id) && newFollows.add(id);

    // update state
    setFollows(newFollows);
  };

  return (
    <div className="App">
      <h1 className="title">Robots-R-Us</h1>
      <div className="cards-container">
        {data.map((robot) => (
          <Card
            key={robot.id}
            profile={robot}
            followed={follows.has(robot.id)}
            toggleFollow={handleFollowClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
