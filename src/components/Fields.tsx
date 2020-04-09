//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { createStyles, Theme, ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useLocation } from 'react-router-dom';

type Props = {
	login: String;
	register: String;
	changeField: any;
	password: string;
	confirmPassword: string;
	handleMouseDownPassword: any;
	handleClickShowPassword: any;
	showPassword: boolean;
	showConfirmPassword: boolean;
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
	confirmPassword,
	handleMouseDownPassword,
	handleClickShowPassword,
	showPassword,
	showConfirmPassword
}) => {
	const classes = useStyles();
	let location = useLocation();
	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<TextField
					className={classes.margin}
					onChange={changeField}
					label="Entrée votre mail"
					id="mail"
					type="email"
				/>
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
									onClick={handleClickShowPassword('creatPassword')}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
				{location.pathname === `/${register}` && (
					<div>
						<TextField
							className={classes.margin}
							onChange={changeField}
							type={showConfirmPassword ? 'text' : 'password'}
							value={confirmPassword}
							label="Confirme mot de passe"
							id="confirmPassword"
							InputProps={{
								endAdornment: (
									<InputAdornment className={classes.adornment} position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword('confirmPassword')}
											onMouseDown={handleMouseDownPassword}
										>
											{showConfirmPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
						<TextField
							className={classes.margin}
							onChange={changeField}
							label="Entrée votre ville"
							id="city"
							type="text"
						/>
					</div>
				)}
			</ThemeProvider>
		</div>
	);
};

export default Fields;
