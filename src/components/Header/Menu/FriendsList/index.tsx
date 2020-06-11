//Imports of dependencies
import React, { useState, FunctionComponent, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

//Local imports
import BadgeAvatars from './BadgeAvatars';

type Props = {
	listFriends: any;
	deleteFriends: any;
	getListFriends: any;
	getOneFriends: any;
	search: string;
	addFriendsResponse: string;
};

const FriendsList: FunctionComponent<Props> = ({
	listFriends,
	deleteFriends,
	getListFriends,
	getOneFriends,
	search,
	addFriendsResponse
}) => {
	const [ display, setDisplay ] = useState({ status: 'none', value: '' });
	const [ listColor, setListColor ] = useState({ background: '#161c2e', color: 'white' });
	const [ arrayFriends, setArrayFriends ] = useState([]);

	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');

	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			root: {
				width: '100%',
				maxWidth: 360,
				color: 'white',
				overflow: 'auto'
			},
			listBackground: {
				backgroundColor: listColor.background,
				color: listColor.color
			},
			listHover: {
				'&:hover': {
					backgroundColor: 'grey'
				}
			},
			iconMsg: {
				color: '#161c2e',
				display: display.status,
				'&:hover': {
					color: '#3F51B5'
				}
			},
			iconCross: {
				color: '#161c2e',
				display: display.status,
				cursor: 'pointer',
				'&:hover': {
					color: '#BC074C'
				}
			}
		})
	);

	const classes = useStyles();

	useEffect(() => {
		sessionLogin.isLogged === true && getListFriends(sessionLogin.uid);
	}, []);

	useEffect(
		() => {
			sessionLogin.isLogged === true && getListFriends(sessionLogin.uid);
		},
		[ addFriendsResponse ]
	);

	useEffect(
		() => {
			if (search.length >= 1) {
				let result = listFriends.filter((friends: any) => {
					return friends.pseudo.toLowerCase().includes(search.toLowerCase());
				});
				setArrayFriends(result);
			} else {
				setArrayFriends(listFriends);
			}
		},
		[ search, listFriends ]
	);

	const handleDisplayIconClick = (event: any) => {
		//console.log(event.currentTarget.id);
		setDisplay({ ...display, status: 'bloc', value: event.currentTarget.id });
		setListColor({ ...listColor, background: '#ef6c35', color: '#161c2e' });
	};

	return (
		<List dense className={classes.root}>
			{arrayFriends.map((value: any, index: any) => {
				//console.log(value, index, search);

				const labelId = `checkbox-list-secondary-label-${value.pseudo}`;
				return (
					<div key={value.pseudo} onClick={handleDisplayIconClick} id={`${value.pseudo}`}>
						<ListItem
							className={`${value.pseudo}` === display.value ? classes.listBackground : classes.listHover}
						>
							<ListItemAvatar>
								<BadgeAvatars isLogged={value.isLogged} />
							</ListItemAvatar>
							<ListItemText id={labelId} primary={`${value.pseudo}`} />
							{`${value.pseudo}` === display.value ? (
								<Link
									to={`/chatroom/${value.pseudo}?sort=chat`}
									onClick={getOneFriends(value, listFriends)}
								>
									<ChatIcon className={classes.iconMsg} />
								</Link>
							) : (
								''
							)}
							{`${value.pseudo}` === display.value ? (
								<CloseIcon
									onClick={deleteFriends(value.pseudo, sessionLogin.uid, listFriends)}
									className={classes.iconCross}
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
