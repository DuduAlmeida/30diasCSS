import styled from 'styled-components';

export const Container = styled.div`
    background-color: #333;

    width:  100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: "row";

  > li{
        color: #f5f5f5;
        margin: 0 1em;
        font-size: 40px;
        animation: lighting 1.8s infinite linear;
  }

  @keyframes lighting{
      0%{
        text-shadow: none;
        color: #f5f5f5;
      }
      90%{
        text-shadow: none;
        color: #f5f5f5;
      }
      100%{
          
        color: #fff866;
        text-shadow: 1.5px 1.5px 3px #ff8f66, -1.5px -1.5px 3px #ff8f45;
      }
  }



`;
