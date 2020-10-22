import React, { useState } from "react";
import styled from 'styled-components'

const RobotCardWrapper = styled.div`
    padding: 5px;
`

const RobotCard = (props) => {
    const [following, setFollowing] = useState(false)
    
    return (
        <RobotCardWrapper>
            <img alt="" />
            <button>Following</button>
            <h1>Name</h1>
            <h2>Role</h2>
            <h3>Email</h3>
        </RobotCardWrapper>
    )
}