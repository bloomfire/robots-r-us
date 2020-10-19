import React from "react";
import data from "./data";
import "./App.css";
import Header from "./components/Header";
import Directory from "./components/Directory";

const App = () => {
  //sorts robots by last name
  data.sort((a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="App">
      <Header />
      <Directory data={data} />
    </div>
  );
};

export default App;
