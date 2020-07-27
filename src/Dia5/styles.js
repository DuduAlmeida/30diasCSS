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

export const EsferaMenor = styled.div`
  width: 20vh;
  height: 20vh;
  border-radius: 10vh;
  background-color: #ff2262;
  margin-left: 5em;
  position: relative;
  display: flex;
    justify-content: center;
    align-items: center;
  
  
  
  &::after{
      content: '';
      animation: pulse 2s infinite linear;
      width: 20vh;
        height: 20vh;
        z-index: 2;
        position: absolute;      
        border-radius: 10vh;
        background-color: #ff2262;
  }

    @keyframes pulse{
    from{
        width: 20vh;
        height: 20vh;        
        border-radius: 10vh;
        opacity: 0.1;
        background-color: #ff6a95;
    }

    to{
        width: 30vh;
        height: 30vh;        
        border-radius: 15vh;
        opacity: 0.2;
        background-color: #ff6a95;
    }
    }
`;

export const Esfera = styled.div`
  width: 40vh;
  height: 40vh;
  border-radius: 20vh;
  background-color: #ff2262;
  animation: pulse-shadow 2s infinite linear;

  @keyframes pulse-shadow{
    from{
        box-shadow: 0 0 10px #ff6a95;        
    }

    to{
        box-shadow: 0 0 100px #ff6a95;
    }
  }
`;
