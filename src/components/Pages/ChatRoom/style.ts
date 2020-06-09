import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		typo: {
			color: '#161c2e',
			position: 'fixed',
			right: 'calc(50% - 5em)',
			top: '0',
			textAlign: 'center'
		},
		contentChat: {
			width: '50%',
			margin: 'auto'
		}
	});
});

export default useStyles;
