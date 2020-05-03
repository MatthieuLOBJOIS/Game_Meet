import { LOG_IN, checkLogged } from '../actions/user';
import fire, { db } from '../config/fire';

const loginMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case LOG_IN: {
			let mail = store.getState().register.mail.value;
			let password = store.getState().register.password.value;
			fire
				.auth()
				.signInWithEmailAndPassword(mail, password)
				.then((response: any) => {
					db.collection('users').doc(response.user.uid).get().then(function(querySnapshot) {
						//console.log(querySnapshot.data(), 'success', response);
						return store.dispatch(checkLogged(true, querySnapshot.data()));
					});
				})
				.catch((err) => {
					console.warn(err, 'error');
					return store.dispatch(checkLogged(false));
				});
		}
		default:
			next(action);
	}
};
export default loginMiddleware;
