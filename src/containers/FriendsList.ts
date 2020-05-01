import { connect } from 'react-redux';

import FriendsList from '../components/FriendsList';
import { getListFriends, deleteFriends } from '../actions/friends';
const mapStateToProps = (state: any) => ({
	user: state.user,
	listFriends: state.friends.listFriends
});

const mapDispatchToProps = (dispatch: any) => ({
	getListFriends: (uid: any) => {
		dispatch(getListFriends(uid));
	},
	deleteFriends: (value: any, uid: any, listFriends: any) => {
		return () => {
			dispatch(deleteFriends(value, uid, listFriends));
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
