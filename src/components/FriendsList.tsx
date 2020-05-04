//Imports of dependencies
import React, { useState, FunctionComponent, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

//Local imports*
import BadgeAvatars from './BadgeAvatars';

type Props = {
	listFriends: any;
	deleteFriends: any;
	getListFriends: any;
};

const FriendsList: FunctionComponent<Props> = ({ listFriends, deleteFriends, getListFriends }) => {
	const [ display, setDisplay ] = useState({ status: 'none', value: '' });
	const [ listColor, setListColor ] = useState({ background: '#161c2e', color: 'white' });
	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');
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

	useEffect(() => {
		sessionLogin.isLogged === true && getListFriends(sessionLogin.uid);
	}, []);

	const handleDisplayIconClick = (event: any) => {
		//console.log(event.currentTarget.id);
		setDisplay({ ...display, status: 'bloc', value: event.currentTarget.id });
		setListColor({ ...listColor, background: '#ef6c35', color: '#161c2e' });
	};

	return (
		<List dense className={classes.root}>
			{listFriends.map((value: any, index: any) => {
				console.log(value, index);
				const labelId = `checkbox-list-secondary-label-${value.pseudo}`;
				return (
					<div onClick={handleDisplayIconClick} id={`${value.pseudo}`}>
						<ListItem
							className={`${value.pseudo}` === display.value ? classes.listBackground : ''}
							key={value.pseudo}
						>
							<ListItemAvatar>
								<BadgeAvatars isLogged={value.isLogged} />
							</ListItemAvatar>
							<ListItemText id={labelId} primary={`${value.pseudo}`} />
							{`${value.pseudo}` === display.value ? (
								<Link to={`/chatroom/${value.pseudo}`}>
									<ChatIcon className={classes.iconColor} />
								</Link>
							) : (
								''
							)}
							{`${value.pseudo}` === display.value ? (
								<CloseIcon
									onClick={deleteFriends(value.pseudo, sessionLogin.uid, listFriends)}
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
