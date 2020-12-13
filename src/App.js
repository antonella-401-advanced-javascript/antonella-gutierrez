import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/homeContainer/Home';
import AboutContainer from './containers/aboutContainer/About';
import ProjectsContainer from './containers/projectsContainer/Projects';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/projects" component={ProjectsContainer} />
      </Switch>
    </Router>
  );
};

export default App;