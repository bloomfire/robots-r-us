import React from 'react';
import styled from 'styled-components'
import RobotCard from './RobotCard'

const RobotCardGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 100px;
    margin: 0 20px 40px 20px;
`

const RobotCardGrid = (props) => {
    return (
        <RobotCardGridWrapper>
            {props.data.map(profile => (
                <RobotCard profile={profile} key={profile.id}/>
            ))}
        </RobotCardGridWrapper>
    )
}

export default RobotCardGrid;