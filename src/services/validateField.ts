export const validateField = (value: any) => {
	const mail = validateMail(value);
	const password = validatePassword(value);
	const pseudo = validatePseudo(value);
	const city = validateCity(value);
	const address = validateAddress(value);
	const games = validateGames(value);
	if (mail && password && pseudo && city && address && games) {
		return true;
	} else {
		return false;
	}
};

const validateMail = (value: any) => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.mail)) {
		//console.log('vrai');
		return true;
	}
	//console.log('You have entered an invalid email address!');
	return false;
};

const validatePassword = (value: any) => {
	if (value.password === value.confirmPassword && /^(?=.*\d).{4,8}$/.test(value.password)) {
		//console.log('vrai');
		return true;
	}
	//console.log('You have entered an invalid email address!');
	return false;
};

const validatePseudo = (value: any) => {
	if (value.pseudo !== '') {
		//console.log('vrai');
		return true;
	}
	//console.log('You have entered an invalid email address!');
	return false;
};

const validateCity = (value: any) => {
	if (value.city !== '') {
		//console.log('vrai');
		return true;
	}
	//console.log('You have entered an invalid email address!');
	return false;
};

const validateAddress = (value: any) => {
	if (value.address !== '') {
		//console.log('vrai');
		return true;
	}
	//console.log('You have entered an invalid email address!');
	return false;
};

const validateGames = (value: any) => {
	if (value.chooseGames.length !== 0) {
		//console.log('vrai');
		return true;
	}
	//console.log('You have entered an invalid email address!');
	return false;
};
