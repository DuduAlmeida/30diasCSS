import styled from 'styled-components';

export const Main = styled.div`
  width:100%;
  height: 100%;  
  position: relative;
  font-size: 50px;  
`;


export const Superior = styled(Main)`
  position:absolute;
  background-color: #333;
  color: #e32636;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  overflow: hidden;

  > span{
    transform: translate(50%);
    animation: movimenta1 3s infinite linear;
  }

  @keyframes movimenta1{
      to{
        transform: translate(100%);
      }
  }
`;

export const Inferior = styled(Main)`
  position:absolute;
  width: 50%;
  right: 0;
  background-color: #e32636;
  color: #333;
  overflow: hidden;
  display:flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;

  > span{
    transform: translate(-50%);
    animation: movimenta2 3s infinite linear;
  }

  
  @keyframes movimenta2{
      to{
        transform: translate(0%);
      }
  }
`;

export const Textos = styled.span`
  font-size: 90px;
  font-weight: bold;
`;