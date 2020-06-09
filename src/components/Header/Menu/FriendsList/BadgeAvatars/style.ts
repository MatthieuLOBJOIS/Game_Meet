import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export const StyledBadge = withStyles((theme: Theme) =>
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

export const useStyles = makeStyles((theme: Theme) =>
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
