//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

//Local imports

//Components
import Header from './containers/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: FunctionComponent = () => {
	return (
		<div>
			<Grid container>
				<Router>
					<Header />
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
					<Footer />
				</Router>
			</Grid>
		</div>
	);
};

export default App;
