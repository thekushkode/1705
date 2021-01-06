import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import Contact from './components/Contact';
import EventSpace from './components/EventSpace';
import Events from './components/Events';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/spaces' component={EventSpace} />
      <Route exact path='/events' component={Events} />
    </Switch>
  );
}

export default App;
