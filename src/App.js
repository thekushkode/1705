import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/home';
import Contact from './components/Contact';
import OurSpace from './components/OurSpace';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/eventspace' component={OurSpace} />
    </Switch>
  );
}

export default App;
