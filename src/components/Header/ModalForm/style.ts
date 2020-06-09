import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
	let v: string = 'visible';

	return createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		},
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch'
			}
		},
		registerMessage: {
			position: 'absolute',
			padding: '1em',
			top: '20%',
			color: 'white',
			textAlign: 'center',
			backgroundColor: '#27AE60',
			opacity: '1',
			transition: 'opacity 2s linear'
		}
	});
});

export default useStyles;
