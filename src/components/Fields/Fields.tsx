//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
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
	address
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
				<SimpleField label="Entrée votre mail" id="mail" type="email" changeField={changeField} />
				<PasswordField
					type={showPassword}
					value={password}
					label="Entrée votre mot de passe"
					id="password"
					handleClickShowPassword={handleClickShowPassword('creatPassword')}
					changeField={changeField}
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
						/>
						<SimpleField label="Entrée votre pseudo" id="pseudo" type="text" changeField={changeField} />
						<SimpleField label="Entrée votre ville" id="city" type="text" changeField={changeField} />
						<SimpleField label="Entrée votre adresse" id="address" type="text" changeField={changeField} />
						<SelectField id="chooseGames" />
					</div>
				)}
			</ThemeProvider>
		</div>
	);
};

export default Fields;
