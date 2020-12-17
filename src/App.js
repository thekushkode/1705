import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import Contact from './components/Contact';
import EventSpace from './components/EventSpace';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/eventspace' component={EventSpace} />
    </Switch>
  );
}

export default App;
