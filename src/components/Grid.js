import React from "react";
import Grid from "@material-ui/core/Grid";

import robots from "../data";
import Card from "./Card";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  return (
    <Grid container justify="center" spacing={spacing}>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          firstName={robot.first_name}
          lastName={robot.last_name}
          email={robot.email}
          title={robot.title}
          avatar={robot.avatar}
          following={robot.following}
        />
      ))}
    </Grid>
  );
}
