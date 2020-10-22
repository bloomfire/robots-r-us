import React, { useState } from 'react';
import './FollowButton.css';

export default function FollowButton() {
    const [followed, setFollow] = useState(false);

    return (
        <button 
            id="follow-button"
            onClick={() => setFollow(!followed)}>
        
        {followed ? "Following" : "Follow"}

        </button>
    );
}