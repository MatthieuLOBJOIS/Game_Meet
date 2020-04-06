import { connect } from 'react-redux';

import Fields from '../components/Fields';
import { changeField, showPassword } from '../actions/user';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	password: state.user.password,
	showPassword: state.user.showPassword
});

const mapDispatchToProps = (dispatch: any) => ({
	changeField: (event: any) => {
		let newValue = event.target.value;
		let identifier = event.target.id;
		//console.log(newValue, identifier);
		dispatch(changeField(newValue, identifier));
	},
	handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	},
	handleClickShowPassword: () => {
		dispatch(showPassword());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Fields);
