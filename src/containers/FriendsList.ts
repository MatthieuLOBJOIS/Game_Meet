import { connect } from 'react-redux';

import FriendsList from '../components/FriendsList';
import { deleteFriends, getListFriends } from '../actions/friends';

const mapStateToProps = (state: any) => ({
	user: state.user,
	listFriends: state.friends.listFriends
});

const mapDispatchToProps = (dispatch: any) => ({
	deleteFriends: (value: any, uid: any, listFriends: any) => {
		return () => {
			dispatch(deleteFriends(value, uid, listFriends));
		};
	},
	getListFriends: (sessionData: any) => {
		dispatch(getListFriends(sessionData));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
