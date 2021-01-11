import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import Contact from './components/Contact';
import EventSpace from './components/EventSpace';
import EventsPage from './components/EventsPage';
import EmailThankYou from './components/EmailThankYou';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/spaces' component={EventSpace} />
      <Route exact path='/events' component={EventsPage} />
      <Route exact path='/email-received' component={EmailThankYou} />
    </Switch>
  );
}

export default App;
