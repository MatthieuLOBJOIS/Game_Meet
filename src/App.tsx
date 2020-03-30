//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

//Local imports

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: FunctionComponent = () => {
	return (
		<div>
			<Grid container>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
					<Footer />
				</Router>
			</Grid>
		</div>
	);
};

export default App;
