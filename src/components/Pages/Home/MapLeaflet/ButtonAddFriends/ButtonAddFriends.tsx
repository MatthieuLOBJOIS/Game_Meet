//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { themeButton } from '../../../../../services/createTheme';

type Props = {
	addNewFriends: any;
	user: any;
	sessionData: any;
	listFriends: any;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		margin: {
			margin: theme.spacing(1)
		}
	})
);

const ButtonAddFriends: FunctionComponent<Props> = ({ addNewFriends, user, sessionData, listFriends }) => {
	//console.log(sessionData.friends, pseudo);
	const classes = useStyles();
	return (
		<div>
			<ThemeProvider theme={themeButton}>
				<Button
					onClick={addNewFriends(user, sessionData, listFriends)}
					type="submit"
					variant="contained"
					color="primary"
					className={classes.margin}
				>
					Ajouter en Amis
				</Button>
			</ThemeProvider>
		</div>
	);
};

export default ButtonAddFriends;
