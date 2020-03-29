//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

//Local imports
//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: FunctionComponent = () => {
	return (
    <div>
      <Container>
			  <Router>
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
		    </Router>
		  </Container>
    </div>
	);
};

export default App;
