//Imports of dependencies
import React, { FunctionComponent, useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { themeButton } from '../../../../../services/createTheme';
import useStyles from './style';

type Props = {
	addNewFriends: any;
	user: any;
	sessionData: any;
	listFriends: any;
	addFriendsResponse: string;
	pseudo: string;
};

const ButtonAddFriends: FunctionComponent<Props> = ({
	addNewFriends,
	user,
	sessionData,
	listFriends,
	addFriendsResponse,
	pseudo
}) => {
	//console.log(sessionData.friends, pseudo);
	const classes = useStyles();
	//console.log(addFriendsResponse);
	const [ friendsResponse, setFriendsResponse ] = useState<string>('');

	useEffect(
		() => {
			setFriendsResponse(addFriendsResponse);
		},
		[ addFriendsResponse ]
	);

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
			{friendsResponse === 'success' && (
				<Alert variant="filled" severity="success">{`${pseudo} est votre amis !`}</Alert>
			)}
			{friendsResponse === 'warn' && (
				<Alert variant="filled" severity="warning">{`${pseudo} est déjà votre amis !`}</Alert>
			)}
		</div>
	);
};

export default ButtonAddFriends;
