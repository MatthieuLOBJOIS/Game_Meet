import { connect } from 'react-redux';

import FriendsList from '../../../../components/Header/Menu/FriendsList';
import { deleteFriends, getListFriends, getOneFriends } from '../../../../actions/friends';

const mapStateToProps = (state: any) => ({
	user: state.user,
	listFriends: state.friends.listFriends,
	search: state.friends.search,
	addFriendsResponse: state.friends.addFriendsResponse
});

const mapDispatchToProps = (dispatch: any) => ({
	deleteFriends: (value: any, uid: any, listFriends: any) => {
		return () => {
			dispatch(deleteFriends(value, uid, listFriends));
		};
	},
	getListFriends: (sessionData: any) => {
		dispatch(getListFriends(sessionData));
	},
	getOneFriends: (value: any, listFriends: any) => {
		return () => {
			dispatch(getOneFriends(value, listFriends));
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
