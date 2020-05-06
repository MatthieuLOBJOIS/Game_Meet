import { connect } from 'react-redux';

import ButtonAddFriends from '../components/ButtonAddFriends';
import { addNewFriends } from '../actions/friends';

const mapStateToProps = (state: any) => ({
	data: state.user.listUsersData
});

const mapDispatchToProps = (dispatch: any) => ({
	addNewFriends: (user: any, sessionData: any, listFriends: any) => {
		return (): void => {
			dispatch(addNewFriends(user, sessionData, listFriends));
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddFriends);
