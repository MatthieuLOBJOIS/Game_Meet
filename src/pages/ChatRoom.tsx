//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import BadgeAvatars from '../components/BadgeAvatars';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ChatField from '../containers/Fields/ChatField';
import ButtonSubmit from '../components/ButtonSubmit';

type Props = {
	sendMessage: any;
	displayMessages: any;
	talk: any;
	myFriends: any;
	getOneFriends: any;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		typo: {
			color: '#161c2e'
		},
		message: {
			color: 'red',
			textAlign: 'end'
		}
	})
);

const ChatRoom: FunctionComponent<Props> = ({ sendMessage, displayMessages, talk, myFriends, getOneFriends }) => {
	const classes = useStyles();

	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');
	let sessionUser = JSON.parse(localStorage.getItem('isUser') || '{}');

	let sessionFriends = JSON.parse(localStorage.getItem('friends') || '{}');

	useEffect(getOneFriends(sessionFriends.myFriends, sessionFriends.listFriends), []);

	useEffect(
		() => {
			if (myFriends !== null) {
				sessionLogin.isLogged === true && displayMessages(sessionUser.sessionData, myFriends);
			}
		},
		[ myFriends ]
	);

	return (
		<Grid item style={{ height: '100vh' }} xs={12}>
			{sessionLogin.isLogged === true &&
			myFriends !== null && (
				<div>
					<Typography style={{ textAlign: 'center' }} className={classes.typo} variant="h4" component="h1">
						{myFriends.pseudo} chatRoom
					</Typography>
					<div style={{ height: '80vh' }}>
						{talk.map((message: any) => {
							return (
								<p className={myFriends.pseudo === message.pseudo ? classes.message : ''}>
									{message.message}
								</p>
							);
						})}
					</div>
					<form onSubmit={sendMessage(sessionUser.sessionData, myFriends)}>
						<ChatField label={myFriends.pseudo} />
						<ButtonSubmit />
					</form>
				</div>
			)}
		</Grid>
	);
};

export default ChatRoom;
