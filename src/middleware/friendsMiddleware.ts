import {
	ADD_NEW_FRIENDS,
	saveListFriends,
	addNewFriendsResponse,
	GET_LIST_FRIENDS,
	DELETE_FRIENDS,
	GET_ONE_FRIENDS,
	saveOneFriends
} from '../actions/friends';
import fire, { db } from '../config/fire';

const friendsMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case ADD_NEW_FRIENDS:
			{
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
							store.dispatch(addNewFriendsResponse('success'));
							setTimeout(() => {
								store.dispatch(addNewFriendsResponse(''));
							}, 2000);
							//return store.dispatch(saveListFriends(arrayFriends));
						});
				}
				store.dispatch(addNewFriendsResponse('warn'));
				setTimeout(() => {
					store.dispatch(addNewFriendsResponse(''));
				}, 2000);
			}
			break;

		case DELETE_FRIENDS: {
			const friends = action.value;
			const uid = action.uid;
			const listFriends = action.listFriends;
			const newListFriends = listFriends.filter((name: any) => {
				if (name.pseudo !== friends) {
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
					return store.dispatch(saveListFriends(newListFriends));
				});
		}

		case GET_LIST_FRIENDS: {
			const uid = action.uid;
			const NewFriendsArray: any = [];
			//console.log(uid);
			return db.collection('users').doc(uid).get().then(function(querySnapshot: any) {
				//console.log(querySnapshot.data().friends);
				const friendsArray = querySnapshot.data().friends;

				friendsArray.map((friends: any) => {
					if (friends.uid !== undefined) {
						db.collection('users').doc(friends.uid).get().then(function(querySnapshot) {
							NewFriendsArray.push(querySnapshot.data());
							if (friendsArray.length === NewFriendsArray.length) {
								return store.dispatch(saveListFriends(NewFriendsArray));
							}
						});
					}
				});
			});
		}

		case GET_ONE_FRIENDS:
			{
				const friendsValue = action.value;
				let myFriends = '';
				const listFriends = action.listFriends;
				if (listFriends.some((friends: any) => friends.uid === friendsValue.uid)) {
					myFriends = friendsValue;
					return store.dispatch(saveOneFriends(myFriends, listFriends));
				}
			}
			break;
		default:
			next(action);
	}
};
export default friendsMiddleware;
