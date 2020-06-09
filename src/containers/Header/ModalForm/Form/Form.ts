import { connect } from 'react-redux';

import Form from '../../../../components/Header/ModalForm/Form/Form';
import { saveUser } from '../../../../actions/register';
import { logIn } from '../../../../actions/login';
const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isLogged: state.login.isLogged
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
