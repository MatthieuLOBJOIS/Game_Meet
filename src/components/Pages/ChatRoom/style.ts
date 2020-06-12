import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			[theme.breakpoints.up('sm')]: {
				marginLeft: '22em',
				width: '70%'
			},
			[theme.breakpoints.down('xs')]: {
				marginLeft: '2em'
			}
		},
		typo: {
			color: '#161c2e',
			position: 'fixed',
			right: 'calc(50% - 5em)',
			top: '0',
			textAlign: 'center'
		},
		contentChat: {}
	})
);

export default useStyles;
