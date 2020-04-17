import { connect } from 'react-redux';

import Form from '../components/Form';
import { logIn, saveUser } from '../actions/user';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isLogged: state.user.isLogged,
	isUser: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
	handleSubmit: (location: string, login: any, register: string) => {
		return (event: any) => {
			event.preventDefault();
			switch (location) {
				case login: {
					return dispatch(logIn());
				}
				case register: {
					return dispatch(saveUser());
				}
			}
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
