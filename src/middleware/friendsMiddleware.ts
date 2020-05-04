import { ADD_NEW_FRIENDS, saveListFriends, GET_LIST_FRIENDS, DELETE_FRIENDS } from '../actions/friends';
import fire, { db } from '../config/fire';

const friendsMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case ADD_NEW_FRIENDS: {
			const uid = action.sessionData.uid;
			const arrayFriends = action.listFriends;
			const pseudoFriends = action.user.pseudo;
			const user = action.user;
			let found = null;
			//console.log(isLogged);
			// An array of objects
			// Find if the array contains an object by comparing the property value
			if (arrayFriends.some((friends: any) => friends.pseudo === pseudoFriends)) {
				found = true;
			} else {
				found = false;
			}

			if (!found) {
				arrayFriends.push(user);

				return db
					.collection('users')
					.doc(uid)
					.update({
						friends: arrayFriends
					})
					.then(() => {
						return store.dispatch(saveListFriends(arrayFriends));
					});
			}
			return console.log('its a friend');
		}

		case DELETE_FRIENDS: {
			const friends = action.value;
			const uid = action.uid;
			const listFriends = action.listFriends;
			const newListFriends = listFriends.filter((name: any) => {
				if (name.pseudo != friends) {
					return name.pseudo;
				}
			});

			return db
				.collection('users')
				.doc(uid)
				.update({
					friends: newListFriends
				})
				.then(() => {
					store.dispatch(saveListFriends(newListFriends));
				});
		}

		case GET_LIST_FRIENDS: {
			const uid = action.uid;
			const NewFriendsArray: any = [];
			//console.log(uid);
			db.collection('users').doc(uid).get().then(function(querySnapshot: any) {
				//console.log(querySnapshot.data().friends);
				const friendsArray = querySnapshot.data().friends;

				friendsArray.map((friends: any) => {
					if (friends.uid !== undefined) {
						db.collection('users').doc(friends.uid).get().then(function(querySnapshot) {
							NewFriendsArray.push(querySnapshot.data());
							//console.log(friendsArray.length, NewFriendsArray.length);
							if (friendsArray.length == NewFriendsArray.length) {
								return store.dispatch(saveListFriends(NewFriendsArray));
							}
						});
					}
				});
			});
		}

		default:
			next(action);
	}
};
export default friendsMiddleware;
