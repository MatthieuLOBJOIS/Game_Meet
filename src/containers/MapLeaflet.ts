import { connect } from 'react-redux';

import MapLeaflet from '../components/MapLeaflet';
import { snapUsers } from '../actions/user';
import { getUrlPictureGames } from '../actions/games';
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
