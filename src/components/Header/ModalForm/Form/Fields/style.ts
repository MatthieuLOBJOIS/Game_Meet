import { createStyles, Theme, makeStyles, createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap'
		},
		margin: {
			margin: theme.spacing(1)
		},
		adornment: {
			position: 'absolute',
			left: '100%'
		}
	})
);

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ef6c35'
		}
	}
});
