import React from 'react';
// import LinkWrapper from './Helper/LinkWrapper';
import { Container, Dia } from './mainStyle';
import './site.css';

function App() {
  return (

    <Container>
      <Dia><a href="/dia1">Dia 1</a></Dia>
      <Dia><a href="/dia2">Dia 2</a></Dia>
      <Dia><a href="/dia3">Dia 3</a></Dia>
      <Dia><a href="/dia4">Dia 4</a></Dia>
      <Dia><a href="/dia5">Dia 5</a></Dia>
    </Container>

  );
}

export default App;
