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
import ChatRoom from './pages/ChatRoom';

type Props = {
	login: String;
	register: String;
	isLogged: boolean;
	isRegister: boolean;
	sessionData: any;
	getListGames: any;
	takeDataUser: any;
	listFriends: any;
	getListFriends: any;
};

const App: FunctionComponent<Props> = ({
	login,
	register,
	isLogged,
	isRegister,
	sessionData,
	getListGames,
	takeDataUser,
	listFriends,
	getListFriends
}) => {
	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');
	useEffect(() => {
		sessionLogin.isLogged === true && takeDataUser(sessionLogin.uid);
		getListGames();
		sessionLogin.isLogged === true && getListFriends(sessionLogin.uid);
	}, []);

	if (sessionLogin.isLogged === true && sessionData !== null) {
		localStorage.setItem('isUser', JSON.stringify({ sessionData }));
	}

	let sessionUser = JSON.parse(localStorage.getItem('isUser') || '{}');
	//console.log(sessionUser.sessionData.friends, listFriends, '=>', listFriends);
	//console.log(sessionLogin, sessionUser);
	//console.log(listFriends, sessionData, '====>', sessionUser);
	return (
		<div>
			<Grid container>
				<Router>
					<Header />
					<Switch>
						<Route exact path={[ '/', `/${login}`, `/${register}` ]} component={Home} />
						<Route exact path={'/chatroom'} component={ChatRoom} />
						<Route component={ErrorNotFound} />
					</Switch>
					<Footer />
					{sessionLogin.isLogged !== true && <Redirect from="/" to={`/${login}`} />};
					{isRegister === true && <Redirect from={`/${register}`} to={`/${login}`} />};
				</Router>
			</Grid>
		</div>
	);
};

export default App;
