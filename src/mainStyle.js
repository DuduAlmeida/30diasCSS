import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: "row";
    width: 80%;
    height: 80%;
    margin: 10%;

`;

export const Dia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 25px;
    color: #333;
    background-color: #fff;
    box-shadow: #fff -10 -10 15;
    width: 150px;
    height: 150px;
    font-size: 30px;
    
    margin: 1em;
    flex-wrap: wrap;
    

    > a{
        text-decoration: none;
        color: #333;        
    }
`;