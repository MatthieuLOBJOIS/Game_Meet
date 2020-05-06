import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { logOut } from '../actions/login';

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
	logOut: (uid: any) => {
		dispatch(logOut(uid));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
