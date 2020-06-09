import { connect } from 'react-redux';

import Header from '../../components/Header/Header';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
