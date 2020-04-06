//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { createStyles, Theme, ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

type Props = {
	login: String;
	register: String;
	changeField: any;
	password: string;
	handleMouseDownPassword: any;
	handleClickShowPassword: any;
	showPassword: boolean;
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
	login,
	register,
	changeField,
	password,
	handleMouseDownPassword,
	handleClickShowPassword,
	showPassword
}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<TextField className={classes.margin} onChange={changeField} label="Entrée votre mail" id="mail" />
				<TextField
					className={classes.margin}
					onChange={changeField}
					type={showPassword ? 'text' : 'password'}
					value={password}
					label="Entrée votre mot de passe"
					id="password"
					InputProps={{
						endAdornment: (
							<InputAdornment className={classes.adornment} position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
			</ThemeProvider>
		</div>
	);
};

export default Fields;
