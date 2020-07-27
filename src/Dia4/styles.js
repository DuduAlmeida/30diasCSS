import styled from 'styled-components';

export const Container = styled.div`
  background-color: #333;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Botao = styled(Container)`
  background-color: transparent;
  border: solid;
  border-width: 5px;
  border-color: #e32636;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  
  width: 50%;
  height: 50%;
  position: relative;  

  &::before{
    content: '';
    width: 50px;
    height: 50px;
    background-color: #333;
    position: absolute;
    top: 0;
    transform: translate(0,-50%);
    animation: movimento1-volta 2s ease-in-out forwards;
  }

  &::after{
    content: '';
    width: 50px;
    height: 50px;
    background-color: #333;
    position: absolute;
    bottom: 0;
    transform: translate(0,50%);
    animation: movimento2-volta 2s ease-in-out forwards;
  }

  :hover{

    &::before{

        animation: movimento1 2s ease-in-out forwards;
    }

    &::after{

        animation: movimento2 2s ease-in-out forwards;
    }
  }

  @keyframes movimento1{
      to{
        transform: translate(350%, -50%);
      }
  }
  @keyframes movimento1-volta{
      to{
        transform: translate(0, -50%);
      }
  }
  @keyframes movimento2{
      to{
        transform: translate(-350%, 50%);
      }
  }
  @keyframes movimento2-volta{
      to{
        transform: translate(0, 50%);
      }
  }
`;