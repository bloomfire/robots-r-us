import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Button,
  Divider,
  Fade,
} from "@material-ui/core";
import {
  PersonAdd as FollowIcon,
  PersonAddDisabled as UnfollowIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

// Simple CSS in JS
const useStyles = makeStyles(() => ({
  card: {
    height: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cardContent: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 24,
  },
  followButton: {
    backgroundColor: "green",
  },
  unfollowButton: {
    backgroundColor: "red",
  },
}));

/*
    Essentially a totally controlled dumb component with no important logic.
*/

const EmployeeCard = (props) => {
  const {
    name,
    title,
    email,
    avatar,
    following,
    onFollow,
    onUnfollow,
    fadeDelay,
  } = props;
  const classes = useStyles();

  const followActionButton = following ? (
    <Button
      variant="outlined"
      color="secondary"
      onClick={onUnfollow}
      className={classes.btn}
      startIcon={<UnfollowIcon />}
    >
      Unfollow
    </Button>
  ) : (
    <Button
      variant="outlined"
      color="primary"
      onClick={onFollow}
      className={classes.btn}
      startIcon={<FollowIcon />}
    >
      Follow
    </Button>
  );
  return (
    <Fade in={true} style={{ transitionDelay: `${fadeDelay}ms` }}>
      <Card className={classes.card}>
        <CardHeader
          title={name}
          action={followActionButton}
          avatar={<Avatar src={avatar} />}
        />
        <Divider />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6">{email || ""}</Typography>
          <Typography variant="overline">{title || ""}</Typography>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default EmployeeCard;

EmployeeCard.propTypes = {
  fadeDelay: PropTypes.number,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
  following: PropTypes.bool,
};
