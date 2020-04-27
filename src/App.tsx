//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
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
	isRegister: boolean;
	sessionData: any;
	getListGames: any;
};

const App: FunctionComponent<Props> = ({ login, register, isLogged, isRegister, sessionData, getListGames }) => {
	useEffect(() => {
		getListGames();
	}, []);
	if (isLogged === true) {
		localStorage.setItem('isUser', JSON.stringify({ isLogged, sessionData }));
	}

	let sessionUser = JSON.parse(localStorage.getItem('isUser') || '{}');
	//console.log(sessionUser);
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
					{sessionUser.isLogged !== true && <Redirect from="/" to={`/${login}`} />};
					{isRegister === true && <Redirect from={`/${register}`} to={`/${login}`} />};
				</Router>
			</Grid>
		</div>
	);
};

export default App;
