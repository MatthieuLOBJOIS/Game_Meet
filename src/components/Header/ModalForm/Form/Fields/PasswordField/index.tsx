//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import useStyles from './style';

type Props = {
	changeField: any;
	handleMouseDownPassword: any;
	type: boolean;
	value: string;
	label: string;
	id: string;
	handleClickShowPassword: any;
	error: boolean;
	message: string;
};

const Fields: FunctionComponent<Props> = ({
	changeField,
	handleMouseDownPassword,
	type,
	value,
	label,
	id,
	handleClickShowPassword,
	error,
	message
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
			error={error}
			helperText={message}
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
