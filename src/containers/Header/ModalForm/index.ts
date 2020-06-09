import { connect } from 'react-redux';

import ModalForm from '../../../components/Header/ModalForm';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name,
	isRegister: state.register.isRegister
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
