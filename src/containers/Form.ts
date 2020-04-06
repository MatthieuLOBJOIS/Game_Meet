import { connect } from 'react-redux';

import Form from '../components/Form';
import {logIn} from '../actions/user';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isLogged: state.user.isLogged,
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
					return console.log('register');
				}
			}
		};
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
