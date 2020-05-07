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

const useStyles = makeStyles((theme: Theme) => {
	const colorMessage = 'white';
	const paddingMessage = '1em';
	const widthMessage = '50%';
	const overflowWrapMessage = 'break-word';
	return createStyles({
		typo: {
			color: '#161c2e',
			position: 'fixed',
			right: 'calc(50% - 5em)',
			textAlign: 'center'
		},
		messagesContainer: {
			height: '70vh',
			padding: '6em 3em 3em ',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'auto'
		},
		messageUser: {
			color: colorMessage,
			backgroundColor: '#161c2e',
			padding: paddingMessage,
			borderRadius: '2em 1em 1em 0',
			width: widthMessage,
			overflowWrap: overflowWrapMessage
		},
		messageFriends: {
			color: colorMessage,
			textAlign: 'end',
			backgroundColor: '#ef6c35',
			padding: paddingMessage,
			borderRadius: '1em 2em 0 1em ',
			width: widthMessage,
			overflowWrap: overflowWrapMessage,
			alignSelf: 'flex-end'
		}
	});
});

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
					<Typography className={classes.typo} variant="h4" component="h1">
						{myFriends.pseudo} chatRoom
					</Typography>
					<div className={classes.messagesContainer}>
						{talk.map((message: any, index: number) => {
							return (
								<p
									key={index}
									className={
										myFriends.pseudo === message.pseudo ? (
											classes.messageFriends
										) : (
											classes.messageUser
										)
									}
								>
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
