//Imports of dependencies
import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemSecondaryAction, ListItemText, ListItemAvatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

//Local imports*
import Avatar from './Avatar';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: '#161c2e',
			color: 'white'
		},
		close: {
			color: '#161c2e'
		}
	})
);

const StyledListItem = withStyles((theme) => ({
	root: {
		'&:focus': {
			backgroundColor: '#ef6c35',
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: '#161c2e'
			}
		}
	}
}))(ListItem);

export default function FriendsList() {
	const classes = useStyles();

	return (
		<List dense className={classes.root}>
			{[ 0, 1, 2, 3 ].map((value) => {
				const labelId = `checkbox-list-secondary-label-${value}`;
				return (
					<StyledListItem key={value} button>
						<ListItemAvatar>
							<Avatar />
						</ListItemAvatar>
						<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
						<ListItemSecondaryAction>
							<CloseIcon className={classes.close} />
						</ListItemSecondaryAction>
					</StyledListItem>
				);
			})}
		</List>
	);
}
