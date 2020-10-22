import React, { useState } from "react";
import styled from 'styled-components'

const RobotCardWrapper = styled.div`
    padding: 5px;
    display: flex;
    flex-flow: column nowrap;
`

const ButtonActive = styled.button`
    background-color: green;
    border: 1px solid green;
    color: #f9f9f9;
`

const ButtonNotActive = styled.button`
    background-color: #f9f9f9;
    border: 1px solid #242424;
    color: #242424;
`

const RobotCard = (props) => {
    const [following, setFollowing] = useState(false)
    const robot = props.profile

    return (
        <RobotCardWrapper>
            <img alt="" src={robot.avatar} />
            {following 
            ? <ButtonActive onClick={() => setFollowing(!following)}>Following</ButtonActive> 
            : <ButtonNotActive onClick={() => setFollowing(!following)}>Follow</ButtonNotActive>}

            <h1>{robot.first_name} {robot.last_name}</h1>
            <h2>{robot.title}</h2>
            <h3>{robot.email}</h3>
        </RobotCardWrapper>
    )
}

export default RobotCard;