//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createStyles, Theme, ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Input, TextField, InputLabel, IconButton, InputAdornment } from '@material-ui/core';

//Local imports

import { Select, MenuItem, Chip, FormControl } from '@material-ui/core';
import '../style/index.css';

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
	getListGames: any;
	games: any;
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
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			maxWidth: 300
		},
		chips: {
			display: 'flex',
			flexWrap: 'wrap'
		},
		chip: {
			margin: 2
		},
		select: {
			width: 200
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
	showConfirmPassword,
	getListGames,
	games
}) => {
	const classes = useStyles();
	let location = useLocation();
	useEffect(() => {
		getListGames();
	}, []);
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250
			}
		}
	};

	function getStyles(name: string, gameName: string[], theme: Theme) {
		return {
			fontWeight:
				gameName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
		};
	}

	const [ gameName, setGameName ] = React.useState<string[]>([]);

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setGameName(event.target.value as string[]);
	};

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
							label="Entrée votre pseudo"
							id="pseudo"
							type="text"
						/>
						<TextField
							className={classes.margin}
							onChange={changeField}
							label="Entrée votre ville"
							id="city"
							type="text"
						/>
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-mutiple-chip-label">Choisi tes jeux : </InputLabel>
							<Select
								className={classes.select}
								labelId="demo-mutiple-chip-label"
								id="demo-mutiple-chip"
								multiple
								value={gameName}
								onChange={handleChange}
								input={<Input id="select-multiple-chip" />}
								renderValue={(selected) => (
									<div className={classes.chips}>
										{(selected as string[]).map((value) => (
											<Chip key={value} label={value} className={classes.chip} />
										))}
									</div>
								)}
								MenuProps={MenuProps}
							>
								{games.map((name: any) => (
									<MenuItem
										className="MuiListItem-root.Mui-selected"
										key={name}
										value={name}
										style={getStyles(name, gameName, theme)}
									>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
				)}
			</ThemeProvider>
		</div>
	);
};

export default Fields;
