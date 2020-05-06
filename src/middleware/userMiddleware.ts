import { SNAP_USERS, TAKE_DATA_USER, listDataUsers, actualizeDataUser } from '../actions/user';
import { db } from '../config/fire';

const userMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case TAKE_DATA_USER: {
			const uid = action.uid;
			if (uid !== undefined) {
				return db.collection('users').doc(uid).get().then(function(querySnapshot) {
					store.dispatch(actualizeDataUser(querySnapshot.data()));
				});
			}
		}

		case SNAP_USERS: {
			let dataUsers: any = [];
			return db.collection('users').get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					dataUsers.push(doc.data());
				});

				store.dispatch(listDataUsers(dataUsers));
			});
		}

		default:
			next(action);
	}
};
export default userMiddleware;
