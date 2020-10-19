import React from 'react';
import styled from 'styled-components';
import Employee from './Employee';

const Directory = ({data, toggleFollow}) => {
    return (
        <DirectoryContainer className='directory-container'>
            {data.map(d => {
                return (
                    <Employee employeeData={d} toggleFollow={toggleFollow} key={d.id}/>
                )
            })}
        </DirectoryContainer>
    )
}

const DirectoryContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 5% auto;
    flex-flow: row wrap;
    justify-content: center;
`

export default Directory