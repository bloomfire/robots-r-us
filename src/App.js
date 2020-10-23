import React from 'react';
import { CardColumns } from 'react-bootstrap';
import './App.css';
import Profile from "./components/profile"
import data from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="title-center">Robots-R-Us</h1>
      <CardColumns>
        <link rel="stylesheet" href=
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity=
          "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous" />

        <link rel="stylesheet" href=
          "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          integrity=
          "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
          crossorigin="anonymous" />
        {data.map((profile, key) => {
          return <Profile profile={profile} id={key} />
        })}
      </CardColumns>
    </div>
  );
}

export default App;
