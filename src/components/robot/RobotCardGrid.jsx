import React from 'react';
import styled from 'styled-components'
import RobotCard from './RobotCard'
import data from '../../data.js'

const RobotCardGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 100px;
    margin: 0 20px;
`

const RobotCardGrid = () => {
    return (
        <RobotCardGridWrapper>
            {data.map(profile => (
                <RobotCard profile={profile} />
            ))}
        </RobotCardGridWrapper>
    )
}

export default RobotCardGrid;