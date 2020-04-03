import { connect } from 'react-redux';

import Fields from '../components/Fields';

type Props = {
	login: String;
	register: String;
};

const mapStateToProps = (state: any) => ({
	login: state.login.name,
	register: state.register.name
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Fields);
