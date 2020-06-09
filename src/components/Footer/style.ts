import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			backgroundColor: '#161c2e',
			padding: '1em',
			textAlign: 'center',
			color: '#ef6c35'
		}
	});
});

export default useStyles;
