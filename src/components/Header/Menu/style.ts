import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	menu: {
		position: 'fixed',
		zIndex: 1000
	},
	paperAnchorLeft: {
		backgroundColor: '#161c2e'
	},
	logo: {
		height: '20em',
		width: '20em'
	},
	button: {
		color: '#161c2e'
	},
	typo: {
		color: 'white',
		textAlign: 'center'
	}
});

export default useStyles;
