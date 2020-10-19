import React from 'react';
import styled from 'styled-components';

const Employee = ({employeeData}) => {
    const avatarImg = employeeData.avatar ? employeeData.avatar : 'https://robohash.org/default';
    return (
        <EmployeeCard className='employee-card'>
            <EmployeeAvatar className='employee-avatar' src={avatarImg} alt={employeeData.avatar ? employeeData.avatar : 'default'} />
            <EmployeeInfo className='employee-info'>
                <FullName className='employee-name'>
                    {employeeData.first_name + ' ' + employeeData.last_name}
                </FullName>
                {employeeData.title 
                    ? <JobTitle className='job'>
                        <JobHeader className='job-header'>Job: </JobHeader>
                        {employeeData.title}
                    </JobTitle>
                    : ''
                }
                {employeeData.email
                    ? <EmailAddress className='email'>
                        <EmailHeader className='email-header'>Email: </EmailHeader>
                        {employeeData.email}
                    </EmailAddress>
                    : ''
                }
            </EmployeeInfo>
            <FollowButton className='follow-btn'>
                {employeeData.following
                    ? <Unfollow>Unfollow</Unfollow>
                    : <Follow>Follow</Follow>
                }
            </FollowButton>
        </EmployeeCard>
    )
}
const EmployeeCard = styled.div`
    background: midnightblue;
    color: aliceblue;
    font-size: 1.2rem;
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
        box-shadow: 5px 10px 5px rgba(0,255,0,0.6);
    }
`
const EmployeeAvatar = styled.img`
    height: 100px;
    width: 100px;
`

const EmployeeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: space-around;
`

const FullName = styled.p`
    font-weight: bold;
    font-size: 1.6rem;
    margin: 2%;
`

const JobTitle = styled.p`
    margin: 2%;
`

const JobHeader = styled.span`
    font-weight: bold;
`

const EmailAddress = styled.p`
    margin: 2%;
`

const EmailHeader = styled.span`
    font-weight: bold;
`
const FollowButton = styled.button`
    margin: auto;
    font-size: 1.2rem;
    font-weight: bold;
    width: 60%;
`
const Unfollow = styled.span`
    color: red;
`

const Follow = styled.span`
    color: green;
`


export default Employee;