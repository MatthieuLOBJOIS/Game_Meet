import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menu: {
			position: 'fixed',
			zIndex: 1000
		},
		paperAnchorLeft: {
			backgroundColor: '#161c2e',
			[theme.breakpoints.down('xs')]: {
				width: drawerWidth,
				flexShrink: 0
			}
		},
		logo: {
			height: '20em',
			width: '20em',
			[theme.breakpoints.down('xs')]: {
				width: '15em',
				height: '15em'
			}
		},
		button: {
			color: '#161c2e'
		},
		typo: {
			color: 'white',
			textAlign: 'center',
			paddingTop: '1em'
		},
		drawer: {
			display: 'flex',
			flexDirection: 'column'
		}
	})
);

export default useStyles;
