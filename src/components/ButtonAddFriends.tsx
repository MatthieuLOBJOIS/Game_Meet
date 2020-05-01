//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { themeButton } from '../services/createTheme';

type Props = {
	addNewFriends: any;
	pseudo: string;
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

const ButtonAddFriends: FunctionComponent<Props> = ({ addNewFriends, pseudo, sessionData, listFriends }) => {
	//console.log(sessionData.friends, pseudo);
	const classes = useStyles();
	return (
		<div>
			<ThemeProvider theme={themeButton}>
				<Button
					onClick={addNewFriends(pseudo, sessionData, listFriends)}
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
