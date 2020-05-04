import { connect } from 'react-redux';

import App from '../App';
import { snapGame } from '../actions/games';
import { takeDataUser } from '../actions/user';
//import { getListFriends } from '../actions/friends';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isLogged: state.login.isLogged,
	sessionData: state.login.sessionData,
	isRegister: state.register.isRegister
	//listFriends: state.friends.listFriends
});

const mapDispatchToProps = (dispatch: any) => ({
	getListGames: () => {
		dispatch(snapGame());
	},
	takeDataUser: (uid: string): void => {
		dispatch(takeDataUser(uid));
	}
	// getListFriends: (sessionData: any) => {
	// 	dispatch(getListFriends(sessionData));
	// }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
