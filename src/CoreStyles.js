import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: white;
  height: 350px;
  width: 350px;
`;

export const Avatar = styled.img`
  background-color: #6699cd;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Follow = styled.button`
  margin-bottom: 20px;
  background: green;
  border-radius: 5px;
  color: white;
`;
