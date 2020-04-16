//Imports of dependencies
import React, { FunctionComponent } from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';

type Props = {
	changeField: any;
	handleMouseDownPassword: any;
	type: boolean;
	value: string;
	label: string;
	id: string;
	handleClickShowPassword: any;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		margin: {
			margin: theme.spacing(1)
		},
		adornment: {
			position: 'absolute',
			left: '100%'
		}
	})
);

const Fields: FunctionComponent<Props> = ({
	changeField,
	handleMouseDownPassword,
	type,
	value,
	label,
	id,
	handleClickShowPassword
}) => {
	const classes = useStyles();

	return (
		<TextField
			className={classes.margin}
			onChange={changeField}
			type={type ? 'text' : 'password'}
			value={value}
			label={label}
			id={id}
			InputProps={{
				endAdornment: (
					<InputAdornment className={classes.adornment} position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{type ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				)
			}}
		/>
	);
};

export default Fields;
