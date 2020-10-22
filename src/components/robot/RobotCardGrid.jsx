import React from 'react';
import styled from 'styled-components'
import RobotCard from './RobotCard'
import data from '../../data.js'

const RobotCardGridWrapper = styled.div`
    display: grid;
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