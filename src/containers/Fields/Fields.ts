import { connect } from 'react-redux';

import Fields from '../../components/Fields/Fields';
import { changeField, userCoordinate, showPassword, showConfirmPassword } from '../../actions/user';
import { validateChangeField } from '../../actions/register';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	password: state.user.password,
	confirmPassword: state.user.confirmPassword,
	showPassword: state.user.showPassword,
	showConfirmPassword: state.user.showConfirmPassword,
	city: state.user.city,
	address: state.user.address,
	valid: state.register,
	isSubmit: state.register.isSubmit
});

const mapDispatchToProps = (dispatch: any) => ({
	changeField: (event: any) => {
		let newValue = event.target.value;
		let identifier = event.target.id;
		//console.log(newValue, identifier);
		dispatch(changeField(newValue, identifier));
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