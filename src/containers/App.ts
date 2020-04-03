import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
