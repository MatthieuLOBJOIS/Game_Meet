//Imports of dependencies
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createStyles, Theme, ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';

//Local imports
import SelectField from '../../containers/Fields/SelectField';
import SimpleField from '../../containers/Fields/SimpleField';
import PasswordField from '../../containers/Fields/PasswordField';

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
	isSubmit: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap'
		},
		margin: {
			margin: theme.spacing(1)
		},
		adornment: {
			position: 'absolute',
			left: '100%'
		}
	})
);

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ef6c35'
		}
	}
});

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
	isSubmit
}) => {
	const classes = useStyles();
	let location = useLocation();

	useEffect(
		() => {
			userCoordinate();
		},
		[ city, address ]
	);

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<SimpleField
					label="Entrée votre mail"
					id="mail"
					type="email"
					changeField={changeField}
					error={location.pathname === `/${register}` && isSubmit ? valid.mail.status : false}
					message={location.pathname === `/${register}` && isSubmit ? valid.mail.message : ''}
				/>
				<PasswordField
					type={showPassword}
					value={password}
					label="Entrée votre mot de passe"
					id="password"
					handleClickShowPassword={handleClickShowPassword('creatPassword')}
					changeField={changeField}
					error={location.pathname === `/${register}` && isSubmit ? valid.password.status : false}
					message={location.pathname === `/${register}` && isSubmit ? valid.password.message : ''}
				/>

				{location.pathname === `/${register}` && (
					<div>
						<PasswordField
							type={showConfirmPassword}
							value={confirmPassword}
							label="Confirme mot de passe"
							id="confirmPassword"
							handleClickShowPassword={handleClickShowPassword('confirmPassword')}
							changeField={changeField}
							error={isSubmit && valid.confirmPassword.status}
							message={isSubmit && valid.confirmPassword.message}
						/>
						<SimpleField
							label="Entrée votre pseudo"
							id="pseudo"
							type="text"
							changeField={changeField}
							error={isSubmit && valid.pseudo.status}
							message={isSubmit && valid.pseudo.message}
						/>
						<SimpleField
							label="Entrée votre ville"
							id="city"
							type="text"
							changeField={changeField}
							error={isSubmit && valid.city.status}
							message={isSubmit && valid.city.message}
						/>
						<SimpleField
							label="Entrée votre adresse"
							id="address"
							type="text"
							changeField={changeField}
							error={isSubmit && valid.address.status}
							message={isSubmit && valid.address.message}
						/>
						<SelectField
							id="chooseGames"
							error={isSubmit && valid.chooseGames.status}
							message={isSubmit && valid.chooseGames.message}
						/>
					</div>
				)}
			</ThemeProvider>
		</div>
	);
};

export default Fields;
