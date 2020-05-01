//Imports of dependencies
import React, { useState, FunctionComponent, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

//Local imports*
import Avatar from './Avatar';

type Props = {
	getListFriends: any;
	listFriends: any;
	deleteFriends: any;
};

const FriendsList: FunctionComponent<Props> = ({ getListFriends, listFriends, deleteFriends }) => {
	const [ display, setDisplay ] = useState({ status: 'none', value: '' });
	const [ listColor, setListColor ] = useState({ background: '#161c2e', color: 'white' });
	let sessionUser = JSON.parse(localStorage.getItem('isUser') || '{}');
	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');
	useEffect(() => {
		sessionLogin.isLogged === true && getListFriends(sessionLogin.uid);
	}, []);
	//console.log(sessionUser.sessionData.friends, '=>', listFriends);
	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			root: {
				width: '100%',
				maxWidth: 360,
				color: 'white'
			},
			listBackground: {
				backgroundColor: listColor.background,
				color: listColor.color
			},
			iconColor: {
				color: '#161c2e',
				display: display.status
			}
		})
	);

	const classes = useStyles();

	const handleDisplayIconClick = (event: any) => {
		//console.log(event.currentTarget.id);
		setDisplay({ ...display, status: 'bloc', value: event.currentTarget.id });
		setListColor({ ...listColor, background: '#ef6c35', color: '#161c2e' });
	};

	return (
		<List dense className={classes.root}>
			{listFriends.map((value: any, index: any) => {
				//console.log(value, index);
				const labelId = `checkbox-list-secondary-label-${value}`;
				return (
					<div onClick={handleDisplayIconClick} id={`${value}`}>
						<ListItem className={`${value}` === display.value ? classes.listBackground : ''} key={value}>
							<ListItemAvatar>
								<Avatar />
							</ListItemAvatar>
							<ListItemText id={labelId} primary={`${value}`} />
							{`${value}` === display.value ? (
								<Link to={`/chatroom/${value}`}>
									<ChatIcon className={classes.iconColor} />
								</Link>
							) : (
								''
							)}
							{`${value}` === display.value ? (
								<CloseIcon
									onClick={deleteFriends(value, sessionLogin.uid, listFriends)}
									className={classes.iconColor}
								/>
							) : (
								''
							)}
						</ListItem>
					</div>
				);
			})}
		</List>
	);
};

export default FriendsList;
