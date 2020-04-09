//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

//Local imports

//Components
import Header from './containers/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorNotFound from './pages/ErrorNotFound';

type Props = {
	login: String;
	register: String;
	isLogged: boolean;
};

const App: FunctionComponent<Props> = ({ login, register, isLogged }) => {
	let user = JSON.parse(localStorage.getItem('isUser') || '{}');
	return (
		<div>
			<Grid container>
				<Router>
					<Header />
					<Switch>
						<Route exact path={[ '/', `/${login}`, `/${register}` ]} component={Home} />
						<Route component={ErrorNotFound} />
					</Switch>
					<Footer />
					{user.isLogged !== true && <Redirect from="/" to={`/${login}`} />};
				</Router>
			</Grid>
		</div>
	);
};

export default App;
