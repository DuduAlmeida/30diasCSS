import styled from 'styled-components';

export const Loader = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  box-shadow: #ffffff -15px -15px 20px, #333 15px 15px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  > div{
    border-radius: 100px;
    width: 100%;
    height: 100%;
    box-shadow:  0 4px 10px #337df6;
    animation: loading 2s linear infinite;
  }
  >span{
      background-color: transparent;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 25px;
      color: #f5f5f5;
      text-shadow: #ffffff -5px -5px 10px, #333 5px 5px 10px;
      
  }
  @keyframes loading{
    0%{
        transform: rotate(0deg);
    }    
    100%{
        transform: rotate(360deg);
    }
  }
`;

