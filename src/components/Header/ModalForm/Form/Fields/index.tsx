//Imports of dependencies
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

//Local imports
import SelectField from '../../../../../containers/Header/ModalForm/Form/Fields/SelectField/SelectField';
import SimpleField from '../../../../../containers/Header/ModalForm/Form/Fields/SimpleField/SimpleField';
import PasswordField from '../../../../../containers/Header/ModalForm/Form/Fields/PasswordField/PasswordField';
import { useStyles, theme } from './style';

type Props = {
	register: String;
	changeField: any;
	userCoordinate: any;
	password: string;
	confirmPassword: string;
	handleClickShowPassword: any;
	showPassword: boolean;
	showConfirmPassword: boolean;
	city: string;
	address: string;
	valid: any;
	displayError: boolean;
};

const Fields: FunctionComponent<Props> = ({
	register,
	changeField,
	userCoordinate,
	password,
	confirmPassword,
	handleClickShowPassword,
	showPassword,
	showConfirmPassword,
	city,
	address,
	valid,
	displayError
}) => {
	const classes = useStyles();
	let location = useLocation();

	useEffect(
		() => {
			if (city !== '' && address !== '') {
				userCoordinate();
			}
			//console.log(city, address);
		},
		[ city, address ]
	);

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<SimpleField
					label="Entrer votre mail"
					id="mail"
					type="email"
					changeField={changeField}
					error={location.pathname === `/${register}` && displayError ? valid.mail.status : false}
					message={location.pathname === `/${register}` && displayError ? valid.mail.message : ''}
				/>
				<PasswordField
					type={showPassword}
					value={password}
					label="Entrer votre mot de passe"
					id="password"
					handleClickShowPassword={handleClickShowPassword('creatPassword')}
					changeField={changeField}
					error={location.pathname === `/${register}` && displayError ? valid.password.status : false}
					message={location.pathname === `/${register}` && displayError ? valid.password.message : ''}
				/>

				{location.pathname === `/${register}` && (
					<div>
						<PasswordField
							type={showConfirmPassword}
							value={confirmPassword}
							label="Confirmer le mot de passe"
							id="confirmPassword"
							handleClickShowPassword={handleClickShowPassword('confirmPassword')}
							changeField={changeField}
							error={displayError && valid.confirmPassword.status}
							message={displayError && valid.confirmPassword.message}
						/>
						<SimpleField
							label="Entrer votre pseudo"
							id="pseudo"
							type="text"
							changeField={changeField}
							error={displayError && valid.pseudo.status}
							message={displayError && valid.pseudo.message}
						/>
						<SimpleField
							label="Entrer votre ville"
							id="city"
							type="text"
							changeField={changeField}
							error={displayError === true && valid.city.status}
							message={displayError && valid.city.message}
						/>
						<SimpleField
							label="Entrer votre adresse"
							id="address"
							type="text"
							changeField={changeField}
							error={displayError && valid.address.status}
							message={displayError && valid.address.message}
						/>
						<SelectField
							id="chooseGames"
							error={displayError && valid.chooseGames.status}
							message={displayError && valid.chooseGames.message}
						/>
					</div>
				)}
			</ThemeProvider>
		</div>
	);
};

export default Fields;
