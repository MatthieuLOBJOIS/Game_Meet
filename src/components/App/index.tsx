//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

//Local imports
//Components
import Header from '../../containers/Header';
import Footer from '../Footer';
import Home from '../Pages/Home';
import ErrorNotFound from '../Pages/ErrorNotFound';
import ChatRoom from '../../containers/Pages/ChatRoom/index';

type Props = {
	login: String;
	register: String;
	isLogged: boolean;
	isRegister: boolean;
	sessionData: any;
	takeDataUser: any;
};

const App: FunctionComponent<Props> = ({ login, register, isLogged, isRegister, sessionData, takeDataUser }) => {
	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');
	useEffect(() => {
		sessionLogin.isLogged === true && takeDataUser(sessionLogin.uid);
	}, []);

	if (sessionLogin.isLogged === true && sessionData !== null) {
		localStorage.setItem('isUser', JSON.stringify({ sessionData }));
	}

	return (
		<div>
			<Grid container>
				<Router>
					<Header />
					<Switch>
						<Route exact path={[ '/', `/${login}`, `/${register}` ]} component={Home} />
						<Route exact path={'/chatroom/:id'} component={ChatRoom} />
						<Route component={ErrorNotFound} />
					</Switch>
					{sessionLogin.isLogged !== true && <Redirect from="/" to={`/${login}`} />}
					{isRegister === true && <Redirect from={`/${register}`} to={`/${login}`} />}
				</Router>
			</Grid>
		</div>
	);
};

export default App;
