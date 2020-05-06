import { LOG_IN, LOG_OUT, checkLogged } from '../actions/login';
import fire, { db } from '../config/fire';

const loginMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case LOG_IN: {
			let mail = store.getState().register.mail.value;
			let password = store.getState().register.password.value;
			return fire
				.auth()
				.signInWithEmailAndPassword(mail, password)
				.then((response: any) => {
					const collection = db.collection('users').doc(response.user.uid);
					collection
						.update({
							isLogged: true
						})
						.then(() => {
							collection.get().then(function(querySnapshot) {
								//console.log(querySnapshot.data(), 'success', response);
								store.dispatch(checkLogged(true, querySnapshot.data()));
							});
						});
				})
				.catch((err) => {
					console.warn(err, 'error');
					store.dispatch(checkLogged(false));
				});
		}
		case LOG_OUT: {
			const uid = action.uid;
			return db
				.collection('users')
				.doc(uid)
				.update({
					isLogged: false
				})
				.then(() => {
					store.dispatch(checkLogged(null));
				});
		}
		default:
			next(action);
	}
};
export default loginMiddleware;
