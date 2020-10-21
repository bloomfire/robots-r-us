import  styled from 'styled-components';


export const RobotAppWrapper = styled.div`
    h1{
        text-align: center;
    }
`;

export const Button = styled.button `
    background-color: #0FB5BA;
    color: white;
    border: transparent;
    border-radius: 4px;
    padding: 5px 20px;
    outline: transparent;
    &:hover{
        background-color: rgba(15, 181, 186, 0.5)
    }
`;

export const RobotCardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    .robot_info_card{
        background-color: #EDEFF2;
        margin: 20px auto;
        width: 200px;
        border-radius: 6px;
        padding: 10px;
        text-align: center;
        &:hover{
            box-shadow: 0px 2px 8px rgba(102, 119, 153, 0.15);
        }
    }

    img{
        background-color: #FCFCFD;
        border-radius: 50%;
    }

`;




