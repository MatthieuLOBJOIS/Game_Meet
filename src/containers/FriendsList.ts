import { connect } from 'react-redux';

import FriendsList from '../components/FriendsList';
import { getListFriends } from '../actions/friends';
const mapStateToProps = (state: any) => ({
	user: state.user,
	listFriends: state.friends.listFriends
});

const mapDispatchToProps = (dispatch: any) => ({
	getListFriends: (uid: any) => {
		dispatch(getListFriends(uid));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
