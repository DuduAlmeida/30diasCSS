import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: "row";
    margin: auto;

`;

const box = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color: white;
    width: 100px;
    height: 100px;
    font-size: 50px;
    margin: 2em;
    position: relative;
    bottom: 0;
    transform: rotate(30deg);
    transition: all .3s ease-in-out;       
    :hover{
        box-shadow: #048BA8 6px 6px 0, #0DB39E 12px 12px 0, #16DB93 18px 18px 0;
        position: relative;
        bottom: 18px;
        transition: all .3s ease-in-out;       
    }
`;

export const Facebook = styled(box)`    
    background-color: #2C699A;
`;
export const Instagram = styled(box)`

    background-color: #2C699A;
`;
export const Whatsapp = styled(box)`

    background-color: #2C699A;
`;
export const Gmail = styled(box)`

background-color: #2C699A;
`;