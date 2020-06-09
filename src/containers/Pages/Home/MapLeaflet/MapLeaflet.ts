import { connect } from 'react-redux';
import MapLeaflet from '../../../../components/Pages/Home/MapLeaflet/MapLeaflet';
import { snapUsers } from '../../../../actions/user';

const mapStateToProps = (state: any) => ({
	data: state.user.listUsersData,
	listFriends: state.friends.listFriends
});

const mapDispatchToProps = (dispatch: any) => ({
	snapUsers: () => {
		dispatch(snapUsers());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MapLeaflet);
