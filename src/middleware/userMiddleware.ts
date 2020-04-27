import {
	LOG_IN,
	checkLogged,
	SAVE_USER,
	USER_COORDINATE,
	saveUserCoordinate,
	SNAP_USERS,
	listDataUsers
} from '../actions/user';
import fire, { db } from '../config/fire';
import { validField } from '../services/validateField';
import { VALIDATE_CHANGE_FIELD, validStatusField, signupSuccess, signupError } from '../actions/register';

const userMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case LOG_IN: {
			let mail = store.getState().user.mail;
			let password = store.getState().user.password;

			fire
				.auth()
				.signInWithEmailAndPassword(mail, password)
				.then((response: any) => {
					db.collection('users').doc(response.user.uid).get().then(function(querySnapshot) {
						//console.log(querySnapshot.data(), 'success');
						return store.dispatch(checkLogged(true, querySnapshot.data()));
					});
				})
				.catch((err) => {
					console.warn(err, 'error');
					return store.dispatch(checkLogged(false));
				});
		}
		case USER_COORDINATE: {
			let city = store.getState().user.city;
			let address = store.getState().user.address;
			const getLocalization = async (city: any, address: any) => {
				const objectLocation = {
					location: `${city}, ${address}`,
					options: {
						thumbMaps: false
					}
				};
				const options = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(objectLocation)
				};

				let response = await fetch(
					'http://www.mapquestapi.com/geocoding/v1/address?key=aX1uiXkdfaK7FbmaUiUjxrWgTf903Kz5',
					options
				);
				let data = await response.json();

				let location = data.results[0].locations[0].latLng;
				store.dispatch(saveUserCoordinate(location));
			};
			return getLocalization(city, address);
		}
		case VALIDATE_CHANGE_FIELD: {
			const user = store.getState().user;
			const target = action.identifier;

			const status = validField(user, target).status;
			const message = validField(user, target).message;

			return store.dispatch(validStatusField(status === false ? true : false, message, target));
		}
		case SAVE_USER: {
			const user = store.getState().user;
			const register = store.getState().register;
			const mail = !register.mail.status;
			const password = !register.password.status;
			const confirmPassword = !register.confirmPassword.status;
			const pseudo = !register.pseudo.status;
			const city = !register.city.status;
			const address = !register.address.status;
			const games = !register.chooseGames.status;

			if (mail && password && confirmPassword && pseudo && city && address && games) {
				console.log('execute firebase', user);
				fire
					.auth()
					.createUserWithEmailAndPassword(user.mail, user.password)
					.then((resp: any) => {
						db.collection('users').doc(resp.user.uid).set({
							pseudo: user.pseudo,
							city: user.city,
							address: user.address,
							location: user.location,
							games: user.chooseGames
						});
					})
					.then(() => {
						return store.dispatch(signupSuccess());
					})
					.catch((err) => {
						return store.dispatch(signupError(err));
					});
			} else {
				//console.log('error register');
			}
		}

		case SNAP_USERS: {
			let dataUsers: any = [];
			db.collection('users').get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					dataUsers.push(doc.data());
				});

				return store.dispatch(listDataUsers(dataUsers));
			});
		}
		default:
			next(action);
	}
};
export default userMiddleware;
