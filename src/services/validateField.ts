export const validField = (value: any, target: any) => {
	switch (target) {
		case 'mail': {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.mail)) {
				//console.log('vrai');
				return { status: true, message: '' };
			}
			//console.log('You have entered an invalid email address!');
			return { status: false, message: 'email incorrect' };
		}
		case 'password': {
			if (/^(?=.*\d).{4,8}$/.test(value.password)) {
				//console.log('vrai');
				return { status: true, message: '' };
			}
			//console.log('You have entered an invalid email address!');
			return { status: false, message: 'mot de passe incorrect' };
		}
		case 'confirmPassword': {
			if (value.password === value.confirmPassword) {
				//console.log('vrai');
				return { status: true, message: '' };
			}
			//console.log('You have entered an invalid email address!');
			return { status: false, message: "le mot de passe de passe n'est pas identique" };
		}
		case 'pseudo': {
			if (value.pseudo !== '') {
				//console.log('vrai');
				return { status: true, message: '' };
			}
			//console.log('You have entered an invalid email address!');
			return { status: false, message: 'pseudo incorrect' };
		}
		case 'city': {
			if (value.city !== '') {
				//console.log('vrai');
				return { status: true, message: '' };
			}
			//console.log('You have entered an invalid email address!');
			return { status: false, message: 'ville incorrect' };
		}
		case 'address': {
			if (value.address !== '') {
				//console.log('vrai');
				return { status: true, message: '' };
			}
			//console.log('You have entered an invalid email address!');
			return { status: false, message: 'adresse incorrect' };
		}
		case 'chooseGames': {
			if (value.chooseGames.length !== 0) {
				//console.log('vrai');
				return { status: true, message: '' };
			}
			//console.log('You have entered an invalid email address!');
			return { status: false, message: 'veuillez choisir un jeu' };
		}
		default: {
			return { status: true, message: '' };
		}
	}
};
