import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    follow: {
        backgroundColor: '#4f88b1',
        margin: '5px',
        color: 'blue'
    },
    unfollow: {
        backgroundColor: '#4f88b1',
        margin: '5px',
        color: 'white'
    }
});

function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

function FollowBtn() {
    const classes = useStyle();
    const [follow, setFollow] = useStickyState(0, 'follow')

    // Triggers the saving or deleting of questions to a user's account
    const handleFollow = () => {
        if (follow === false) {
            unFollow();
        } else {
            followMe();
        }
        setFollow(!follow);
    };

    // Following a robot
    const followMe= () => {
                if (follow) {
                    alert('You are following this robot!');
                } else {
                    alert('Oops. Something went wrong!');
                }
            };

    // unfollow a robot
    const unFollow = () => {
            if (!follow) {
                alert('You\'ve unfollowed this robot!');
            } else {
                alert('Oops. Something went wrong!');
            }
        };

    return (
        <>
            {follow ? (
                <Button className={classes.follow} onClick={handleFollow}>
                    follow
                </Button>
            ) : (
                <Button className={classes.unfollow} onClick={handleFollow}>
                    unfollow
                </Button>
            )}
        </>
    );
}

export default FollowBtn;