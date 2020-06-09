//Imports of dependencies
import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useLocation, useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

//Local imports
import Fields from '../../../../containers/Header/ModalForm/Form/Fields/Fields';
import ButtonSubmit from './ButtonSubmit';
import '../../../../style/index.css';
import useStyles from './style';

type Props = {
	login: String;
	register: String;
	handleSubmit: any;
	isLogged: any;
};

const Form: FunctionComponent<Props> = ({ handleSubmit, login, register, isLogged }) => {
	const classes = useStyles();
	let location = useLocation();
	let history = useHistory();

	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');
	sessionLogin.isLogged === true && history.push('/');

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
			{isLogged === false &&
			location.pathname === `/${login}` && (
				<Alert variant="outlined" severity="error">
					Alert — Vos donnée saisies sont incorrect veuillez ressayer !
				</Alert>
			)}
		</form>
	);
};

export default Form;
