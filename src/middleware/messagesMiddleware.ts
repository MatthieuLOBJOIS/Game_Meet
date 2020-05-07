import fire, { db } from '../config/fire';
import {
	SEND_MESSAGE,
	DISPLAY_MESSAGES,
	DELETE_MESSAGE,
	clearMessage,
	saveMessages,
	groupChatId,
	deleteMessage
} from '../actions/messages';
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
			message !== '' &&
				db
					.collection('messages')
					.doc(grpChatId)
					.collection(grpChatId)
					.doc(timestamp)
					.set({
						message: { pseudo: user.pseudo, message, uid: user.uid, uidFriends: friends.uid, timestamp }
					})
					.then(() => {
						store.dispatch(clearMessage());
						//store.dispatch(deleteMessage());
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
			const collection = db.collection('messages').doc(grpChatId).collection(grpChatId);
			return collection.onSnapshot(async (snapshot) => {
				snapshot.docChanges().forEach((change) => {
					if (change.type === 'added') {
						//console.log(change.doc.id)
						talk.push(change.doc.data().message);
					}
				});
				return store.dispatch(saveMessages(talk));
			});
		}

		case DELETE_MESSAGE: {
			let grpChatId = store.getState().messages.groupChatId;
			let talk = store.getState().messages.talk;

			if (talk.length >= 12) {
				let found = talk.find((element: any) => element.timestamp);
				//console.log(found.timestamp);
				return db
					.collection('messages')
					.doc(grpChatId)
					.collection(grpChatId)
					.doc(found.timestamp)
					.delete()
					.then(function() {
						console.log('Document successfully deleted!');
					})
					.catch(function(error) {
						console.error('Error removing document: ', error);
					});
			}
		}

		default:
			next(action);
	}
};
export default messagesMiddleware;
