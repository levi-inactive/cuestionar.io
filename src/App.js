import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CreateCuestionario from './components/createCuestionario';

function App() {
  return (
    <div className='container'>
      <CreateCuestionario />
    </div>
  );

  /*return (
    <Router>
      <Switch>
          <Route path='/'>
            <Login />
          </Route>
        <Route path='/cuestionario'>
          <Cuestionario />
        </Route>
        <Route path='/respuestas'>
          <AnsweredCuestionario />
        </Route>
        <Route path='/crear'>
          <CreateCuestionario />
        </Route>
      </Switch>
    </Router>
  );*/
}

export default App;
