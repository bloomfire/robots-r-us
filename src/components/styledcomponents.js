import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
export const RobotGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RobotCard = styled.div`padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
margin: 1rem 2rem;
text-align: center;
border-radius: 4px;
width: 300px;
height: 300px;
}`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const Avatar = styled.img`
  background-color: #6699cc;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-bottom: 1rem;
`;
export const Name = styled.h2`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1rem;
`;
export const Button = styled.button``;
export const Content = styled.p`
  font-size: 0.8rem;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: bold;
`;
