//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		margin: {
			margin: theme.spacing(1)
		}
	})
);

type Props = {
	changeField: any;
	label: string;
	id: string;
	type: string;
};

const SimpleField: FunctionComponent<Props> = ({ changeField, label, id, type }) => {
	const classes = useStyles();

	return <TextField className={classes.margin} onChange={changeField} label={label} id={id} type={type} />;
};

export default SimpleField;
