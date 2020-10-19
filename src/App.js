import React from "react";
import data from "./data";
import "./App.css";
import Header from "./components/Header";
import Directory from "./components/Directory";

function App() {
  return (
    <div className="App">
      <Header />
      <Directory data={data} />
      {/* {data.map(robot => ...)} */}
    </div>
  );
}

export default App;
