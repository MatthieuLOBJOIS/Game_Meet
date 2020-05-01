import { connect } from 'react-redux';

import ButtonAddFriends from '../components/ButtonAddFriends';
import { addNewFriends } from '../actions/friends';

const mapStateToProps = (state: any) => ({
	data: state.user.listUsersData
});

const mapDispatchToProps = (dispatch: any) => ({
	addNewFriends: (pseudo: string, sessionData: any, listFriends: any) => {
		return (): void => {
			dispatch(addNewFriends(pseudo, sessionData, listFriends));
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddFriends);
