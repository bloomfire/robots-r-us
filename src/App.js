import React, { useState, useEffect } from "react";
import data from "./data";
// components
import Card from "./components/Card";
// style
import "./App.css";

function App() {
  // chose Set as data structure due to its search efficiency
  const [follows, setFollows] = useState(new Set());

  useEffect(() => {
    // read data from local storage and initialize state
    const localStorageFollows = JSON.parse(
      window.localStorage.getItem("follows"),
    );

    // set state with a new Set created from data retrieved from localStorage
    setFollows(new Set(localStorageFollows));
  }, []);

  const handleFollowClick = (id) => {
    const newFollows = new Set(follows);

    // delete id from set if value is found, otherwise add it to set
    // delete method returns false if value is not found
    !newFollows.delete(id) && newFollows.add(id);

    // save data in local storage
    window.localStorage.setItem(
      "follows",
      JSON.stringify(Array.from(newFollows)),
    );

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
