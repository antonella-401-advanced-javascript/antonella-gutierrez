import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/homeContainer/Home';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" />
          <Route path="/contact" />
        </Switch>
      </>
    </Router>
  );
};

export default App;