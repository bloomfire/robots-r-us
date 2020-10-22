import React from 'react';
import { Button } from 'react-bootstrap';

const FollowButton = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.following? props.onClick(false) : props.onClick(true);
    }

    return (
        <div>
            <Button className={props.following?"following":"follow"} onClick={handleClick}>
                {props.following?"Following":"Follow"}
            </Button>
        </div>
    )
}


export default FollowButton;