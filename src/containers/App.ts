import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isLogged: state.user.isLogged,
	isRegister: state.register.isRegister
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
