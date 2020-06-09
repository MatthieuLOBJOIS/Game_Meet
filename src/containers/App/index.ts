import { connect } from 'react-redux';

import App from '../../components/App';
import { takeDataUser } from '../../actions/user';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isLogged: state.login.isLogged,
	sessionData: state.login.sessionData,
	isRegister: state.register.isRegister
});

const mapDispatchToProps = (dispatch: any) => ({
	takeDataUser: (uid: string): void => {
		dispatch(takeDataUser(uid));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
