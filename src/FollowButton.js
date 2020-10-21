import React, { useState } from 'react'
import "./App.css"
import { Button } from 'react-bootstrap'

const FollowButton = () => {
    const [follow, setFollow] = useState("Follow")
    const [buttonColor, setButtonColor] = useState("unclicked")

    const handleClick = (e) => {
        e.preventDefault();
        follow === "Follow" ? setFollow("Following") : setFollow("Follow");
        buttonColor === "unclicked" ? setButtonColor("clicked") : setButtonColor("unclicked")
    }

    return (
        <div>
            <Button variant="primary" className={buttonColor} onClick={handleClick}>
                {follow}
            </Button>
        </div>
    )
}


export default FollowButton