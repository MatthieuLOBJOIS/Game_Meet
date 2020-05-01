import { ADD_NEW_FRIENDS, saveListFriends, GET_LIST_FRIENDS } from '../actions/friends';
import fire, { db } from '../config/fire';

const friendsMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case ADD_NEW_FRIENDS: {
			const arrayFriends = action.listFriends;

			const uid = action.sessionData.uid;
			//console.log(arrayFriends, uid);
			const found = arrayFriends.includes(action.pseudo);

			if (!found) {
				arrayFriends.push(action.pseudo);

				return db.collection('users').doc(uid).update({
					friends: arrayFriends
				});
			}
			return console.log('its a friend');
		}
		case GET_LIST_FRIENDS: {
			const uid = action.uid;
			//console.log(uid);
			db.collection('users').doc(uid).get().then(function(querySnapshot: any) {
				return store.dispatch(saveListFriends(querySnapshot.data().friends));
			});
		}

		default:
			next(action);
	}
};
export default friendsMiddleware;
