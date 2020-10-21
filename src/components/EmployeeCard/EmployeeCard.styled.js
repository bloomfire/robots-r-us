import styled from 'styled-components';

export const EmployeeCardCtr = styled.div`
  background: blue;
  width: 400px;
  flex-direction: column;
  display: flex;
  padding: 10px;
`;

export const AvatarImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  background: #47c408;
  background-image: url(${(props) =>
    props.avatarUrl
      ? props.avatarUrl
      : 'https://robohash.org/adipisciautsit.png?size=100x100&set=set1'});
  background-repeat: no-repeat;
  background-position: center;
`;

export const EmployeeName = styled.h3`
  font-size: 24px;
`;

export const EmployeeTitle = styled.h5`
  font-size: 18px;
  margin: 10px 0px 0px 0px;
`;

export const EmployeeEmail = styled.h6`
  font-size: 16px;
  margin: 10px 0px 10px 0px;
`;
