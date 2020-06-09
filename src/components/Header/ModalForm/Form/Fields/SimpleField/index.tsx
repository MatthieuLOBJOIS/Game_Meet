//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './style';

type Props = {
	changeField: any;
	label: string;
	id: string;
	type: string;
	error: boolean;
	message: string;
};

const SimpleField: FunctionComponent<Props> = ({ changeField, label, id, type, error, message }) => {
	const classes = useStyles();

	return (
		<TextField
			className={classes.margin}
			onChange={changeField}
			label={label}
			id={id}
			type={type}
			error={error}
			helperText={message}
		/>
	);
};

export default SimpleField;
