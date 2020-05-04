//Imports of dependencies
import React, { FunctionComponent } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

type Props = {
	isLogged: boolean | null;
};

const StyledBadge = withStyles((theme: Theme) =>
	createStyles({
		badge: {
			backgroundColor: '#44b700',
			color: '#44b700',
			boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
			'&::after': {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				borderRadius: '50%',
				animation: '$ripple 1.2s infinite ease-in-out',
				border: '1px solid currentColor',
				content: '""'
			}
		},
		'@keyframes ripple': {
			'0%': {
				transform: 'scale(.8)',
				opacity: 1
			},
			'100%': {
				transform: 'scale(2.4)',
				opacity: 0
			}
		}
	})
)(Badge);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > *': {
				margin: theme.spacing(1)
			},
			backgroundColor: 'rgba(0, 0, 255, 0)'
		}
	})
);

const BadgeAvatars: FunctionComponent<Props> = ({ isLogged }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<StyledBadge
				invisible={isLogged ? false : true}
				overlap="circle"
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				variant="dot"
			>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			</StyledBadge>
		</div>
	);
};

export default BadgeAvatars;