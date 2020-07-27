import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Dia1 from './Dia1';
import Dia2 from './Dia2';
import Dia3 from './Dia3';
import Dia4 from './Dia4/index';
import Dia5 from './Dia5';
import Dia6 from './Dia6';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/dia1" component={Dia1}/>
      <Route path="/dia2" component={Dia2}/>
      <Route path="/dia3" component={Dia3}/>
      <Route path="/dia4" component={Dia4}/>
      <Route path="/dia5" component={Dia5}/>
      <Route path="/dia6" component={Dia6}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
