//Imports of dependencies
import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

//Local imports*
import Avatar from './Avatar';

export default function FriendsList() {
	const [ display, setDisplay ] = useState({ status: 'none', value: '' });
	const [ listColor, setListColor ] = useState({ background: '#161c2e', color: 'white' });

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
			{[ 0, 1, 2, 3 ].map((value, index) => {
				//console.log(value);
				const labelId = `checkbox-list-secondary-label-${value}`;
				return (
					<div onClick={handleDisplayIconClick} id={`${value}`}>
						<ListItem className={`${value}` === display.value ? classes.listBackground : ''} key={value}>
							<ListItemAvatar>
								<Avatar />
							</ListItemAvatar>
							<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
							{`${value}` === display.value ? (
								<Link to="/chatroom">
									<ChatIcon className={classes.iconColor} />
								</Link>
							) : (
								''
							)}
							{`${value}` === display.value ? <CloseIcon className={classes.iconColor} /> : ''}
						</ListItem>
					</div>
				);
			})}
		</List>
	);
}
