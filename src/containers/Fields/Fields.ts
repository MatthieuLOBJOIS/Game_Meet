import { connect } from 'react-redux';
import Fields from '../../components/Fields/Fields';
import { validateChangeField, userCoordinate, showPassword, showConfirmPassword } from '../../actions/register';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	password: state.register.password.value,
	confirmPassword: state.register.confirmPassword.value,
	showPassword: state.register.showPassword,
	showConfirmPassword: state.register.showConfirmPassword,
	city: state.register.city.value,
	address: state.register.address.value,
	valid: state.register,
	displayError: state.register.displayError
});

const mapDispatchToProps = (dispatch: any) => ({
	changeField: (event: any) => {
		let newValue = event.target.value;
		let identifier = event.target.id;
		//console.log(newValue, identifier);

		dispatch(validateChangeField(newValue, identifier));
	},
	userCoordinate: () => {
		dispatch(userCoordinate());
	},
	handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	},
	handleClickShowPassword: (type: string) => {
		return () => {
			switch (type) {
				case 'creatPassword': {
					return dispatch(showPassword());
				}
				case 'confirmPassword': {
					return dispatch(showConfirmPassword());
				}
			}
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Fields);
