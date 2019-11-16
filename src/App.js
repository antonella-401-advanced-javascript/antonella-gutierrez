import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/homeContainer/Home';
import AboutContainer from './containers/aboutContainer/About';
import ContactContainer from './containers/contactContainer/Contact';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/contact" component={ContactContainer} />
        </Switch>
      </>
    </Router>
  );
};

export default App;