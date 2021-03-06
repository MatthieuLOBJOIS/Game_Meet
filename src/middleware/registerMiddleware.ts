import fire, { db } from '../config/fire';
import { validField } from '../services/validateField';
import {
	VALIDATE_CHANGE_FIELD,
	validStatusField,
	signupSuccess,
	signupError,
	SAVE_USER,
	USER_COORDINATE,
	saveUserCoordinate,
	displayErrorField
} from '../actions/register';

const registerMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case VALIDATE_CHANGE_FIELD: {
			const register = store.getState().register;
			const target = action.identifier;
			const newValue = action.newValue;
			const status = validField(newValue, target, register).status;
			const message = validField(newValue, target, register).message;
			return store.dispatch(validStatusField(status === false ? true : false, message, target, newValue));
		}

		case SAVE_USER: {
			const register = store.getState().register;
			const mail = !register.mail.status;
			const password = !register.password.status;
			const confirmPassword = !register.confirmPassword.status;
			const pseudo = !register.pseudo.status;
			const city = !register.city.status;
			const address = !register.address.status;
			const games = !register.chooseGames.status;
			const listChooseGames = store.getState().games.listChooseGames;

			//console.log('register', mail, password, confirmPassword, pseudo, city, address, games, register.location);

			if (mail && password && confirmPassword && pseudo && city && address && games) {
				fire
					.auth()
					.createUserWithEmailAndPassword(register.mail.value, register.password.value)
					.then((resp: any) => {
						db.collection('users').doc(resp.user.uid).set({
							pseudo: register.pseudo.value,
							isLogged: false,
							city: register.city.value,
							address: register.address.value,
							location: register.location,
							games: listChooseGames,
							friends: [],
							uid: resp.user.uid
						});
					})
					.then(() => {
						return store.dispatch(signupSuccess());
					})
					.catch((err) => {
						return store.dispatch(signupError(err));
					});
			} else {
				return store.dispatch(displayErrorField());
			}
		}
			break;
		case USER_COORDINATE: {
			let city = store.getState().register.city.value;
			let address = store.getState().register.address.value;
			//console.log(city, address);
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
					'https://www.mapquestapi.com/geocoding/v1/address?key=aX1uiXkdfaK7FbmaUiUjxrWgTf903Kz5',
					options
				);
				let data = await response.json();
				let location = data.results[0].locations[0].latLng;
				//console.log('use coordinate', location, data);
				store.dispatch(saveUserCoordinate(location));
			};
			return getLocalization(city, address);
		}
		default:
			next(action);
	}
};
export default registerMiddleware;
