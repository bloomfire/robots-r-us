import React, { useState } from "react";
import styled from 'styled-components'

const RobotCardWrapper = styled.div`
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 5px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    img {
        border-radius: 50%;
        background-color: #7099c8;
        width: 100px;
    }
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
            <h1>{robot.first_name} {robot.last_name}</h1>

            {following 
            ? <ButtonActive onClick={() => setFollowing(!following)}>Following</ButtonActive> 
            : <ButtonNotActive onClick={() => setFollowing(!following)}>Follow</ButtonNotActive>}

            
            <h2>{robot.title}</h2>
            <h3>{robot.email}</h3>
        </RobotCardWrapper>
    )
}

export default RobotCard;