import { connect } from 'react-redux';

import ButtonAddFriends from '../../../../../components/Pages/Home/MapLeaflet/ButtonAddFriends';
import { addNewFriends, addNewFriendsResponse } from '../../../../../actions/friends';

const mapStateToProps = (state: any) => ({
	data: state.user.listUsersData,
	listFriends: state.friends.listFriends,
	addFriendsResponse: state.friends.addFriendsResponse
});

const mapDispatchToProps = (dispatch: any) => ({
	addNewFriends: (user: any, sessionData: any, listFriends: any) => {
		return (): void => {
			dispatch(addNewFriends(user, sessionData, listFriends));
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddFriends);
