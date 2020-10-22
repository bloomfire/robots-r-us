import React, { useState } from 'react';
import './FollowButton.css';

export default function FollowButton() {
    const [followed, setFollow] = useState(false);

    return (
        <button 
            id="follow-button"
            onClick={() => setFollow(!followed)}
            style={followed ? {backgroundColor: "#3C9152", color: "white", fontWeight: "bold"} : {backgroundColor: "white", fontWeight:"bold"}}>
        
        {followed ? "Following" : "Follow"}

        </button>
    );
}