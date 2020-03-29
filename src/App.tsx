//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Local imports
import './App.css';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: FunctionComponent = () => {
	return (
		<div className="App">
			<Router>
        <Header />
        <Switch>
          <Home />
        </Switch>
        <Footer />
		  </Router>
		</div>
	);
};

export default App;
