import { connect } from 'react-redux';

import Form from '../components/Form';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name
});

const mapDispatchToProps = (dispatch: any) => ({
	handleSubmit: (location: string, login: any, register: string) => {
		return (event: any) => {
			event.preventDefault();
			switch (location) {
				case login: {
					return console.log('login');
				}
				case register: {
					return console.log('register');
				}
			}
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
