import { LOG_IN, checkLogged, SAVE_USER, USER_COORDINATE, saveUserCoordinate } from '../actions/user';
import fire from '../config/fire';
import { validateField } from '../services/validateField';

const userMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case LOG_IN: {
			let mail = store.getState().user.mail;
			let password = store.getState().user.password;

			fire
				.auth()
				.signInWithEmailAndPassword(mail, password)
				.then((response) => {
					console.log(response, 'success');
					store.dispatch(checkLogged(true));
				})
				.catch((err) => {
					console.warn(err, 'error');
					store.dispatch(checkLogged(false));
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
		case SAVE_USER: {
			let user = store.getState().user;
			const valid = validateField(user);

			if (valid) {
				console.log('execute firebase');
			} else {
				console.log('error');
			}
		}
		default:
			next(action);
	}
};
export default userMiddleware;
