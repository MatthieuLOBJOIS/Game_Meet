import fire, { db } from '../config/fire';
import { SEND_MESSAGE, DISPLAY_MESSAGES, clearMessage, saveMessages, groupChatId } from '../actions/messages';
import { hashString } from '../services/hashString';
import moment from 'moment';

const messagesMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			const message = store.getState().messages.message;
			const talk = store.getState().messages.talk;
			const user = action.sessionData;
			const friends = action.friends;
			let grpChatId = store.getState().messages.groupChatId;

			const timestamp = moment().valueOf().toString();

			//talk.length > 5 && talk.shift();
			db
				.collection('messages')
				.doc(grpChatId)
				.collection(grpChatId)
				.doc(timestamp)
				.set({
					message: { pseudo: user.pseudo, message, uid: user.uid, uidFriends: friends.uid }
				})
				.then(() => {
					return store.dispatch(clearMessage());
				});
		}

		case DISPLAY_MESSAGES: {
			const friends = action.friends;
			const user = action.sessionData;
			let grpChatId = store.getState().messages.groupChatId;
			//let talk = store.getState().messages.talk;
			let talk: any = [];

			if (hashString(user.uid) <= hashString(friends.uid)) {
				grpChatId = `${user.uid.slice(0, 14)}${friends.uid.slice(0, 14)}`;
			} else {
				grpChatId = `${friends.uid.slice(0, 14)}${user.uid.slice(0, 14)}`;
			}

			store.dispatch(groupChatId(grpChatId));
			return db.collection('messages').doc(grpChatId).collection(grpChatId).onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					if (change.type === 'added') {
						//console.log(change.doc.data().message);
						talk.push(change.doc.data().message);
					}
				});
				store.dispatch(saveMessages(talk));
			});
		}
		default:
			next(action);
	}
};
export default messagesMiddleware;
