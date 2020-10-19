import React from 'react';
import styled from 'styled-components';

const Employee = ({employeeData}) => {
    return (
        <EmployeeCard className='employee-card'>
            {employeeData.first_name + ' ' + employeeData.last_name}
        </EmployeeCard>
    )
}
const EmployeeCard = styled.div`
    background: midnightblue;
    color: aliceblue;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    margin: 2%;
    border: 1px solid midnightblue;
    border-radius: 5px;
    width: 30%;
    max-width: 300px;
    height: 300px;
    :hover{
        box-shadow: 5px 10px 5px rgba(0,255,0,0.4);
    }
`

export default Employee;