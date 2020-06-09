import { connect } from 'react-redux';

import PasswordField from '../../../../../../components/Header/ModalForm/Form/Fields/PasswordField/PasswordField';

const mapStateToProps = (state: any) => ({
	password: state.user.password,
	confirmPassword: state.user.confirmPassword,
	showPassword: state.user.showPassword,
	showConfirmPassword: state.user.showConfirmPassword
});

const mapDispatchToProps = (dispatch: any) => ({
	handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordField);
