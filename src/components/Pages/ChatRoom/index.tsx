//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ChatField from '../../../containers/Pages/ChatRoom/ChatField/ChatField';
import ButtonSubmit from '../../Header/ModalForm/Form/ButtonSubmit';
import ContainerMessages from './ContainerMessages';
import useStyles from './style';

type Props = {
	sendMessage: any;
	displayMessages: any;
	talk: any;
	myFriends: any;
	getOneFriends: any;
};

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
		<Grid item style={{ height: '100vh', backgroundColor: '#FFD29C' }} xs={12}>
			{sessionLogin.isLogged === true &&
			myFriends !== null && (
				<div className={classes.contentChat}>
					<Typography className={classes.typo} variant="h4" component="h1">
						{myFriends.pseudo} chatRoom
					</Typography>
					<ContainerMessages talk={talk} myFriends={myFriends} />
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
