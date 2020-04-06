//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router-dom';

//Local imports
import Fields from '../containers/Fields';
import ButtonSubmit from './ButtonSubmit';
import '../style/index.css';

type Props = {
	login: String;
	register: String;
	handleSubmit: any;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch'
			}
		},
		typo: {
			color: '#161c2e'
		}
	})
);

const Form: FunctionComponent<Props> = ({ handleSubmit, login, register }) => {
	const classes = useStyles();
	let location = useLocation();

	return (
		<form
			onSubmit={handleSubmit(location.pathname.slice(1), login, register)}
			className={classes.root}
			noValidate
			autoComplete="off"
		>
			<Typography className={classes.typo} variant="h5" component="h2">
				{`${location.pathname[1].toUpperCase()}${location.pathname.slice(2)}`}
			</Typography>
			<Fields />
			<ButtonSubmit />
		</form>
	);
};

export default Form;
