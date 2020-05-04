import { connect } from 'react-redux';

import ChatRoom from '../pages/ChatRoom';
import { getListFriends } from '../actions/friends';

const mapStateToProps = (state: any) => ({
	listFriends: state.friends.listFriends
});

const mapDispatchToProps = (dispatch: any) => ({
	getListFriends: (sessionData: any) => {
		dispatch(getListFriends(sessionData));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
