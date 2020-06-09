import { connect } from 'react-redux';

import ChatRoom from '../../../components/Pages/ChatRoom';
import { getOneFriends } from '../../../actions/friends';
import { sendMessage, displayMessages, deleteMessage } from '../../../actions/messages';

const mapStateToProps = (state: any) => ({
	talk: state.messages.talk,
	myFriends: state.friends.myFriends
});

const mapDispatchToProps = (dispatch: any) => ({
	sendMessage: (sessionData: any, friends: any) => {
		return (event: any) => {
			event.preventDefault();
			dispatch(sendMessage(sessionData, friends));
		};
	},
	displayMessages: (sessionData: any, friends: any) => {
		return dispatch(displayMessages(sessionData, friends));
	},
	getOneFriends: (value: any, listFriends: any) => {
		return () => {
			dispatch(getOneFriends(value, listFriends));
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
