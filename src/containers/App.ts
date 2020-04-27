import { connect } from 'react-redux';

import App from '../App';
import { snapGame } from '../actions/games';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isLogged: state.user.isLogged,
	sessionData: state.user.sessionData,
	isRegister: state.register.isRegister
});

const mapDispatchToProps = (dispatch: any) => ({
	getListGames: () => {
		dispatch(snapGame());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
