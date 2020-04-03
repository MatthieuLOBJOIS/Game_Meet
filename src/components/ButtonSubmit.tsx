import React, { FunctionComponent } from 'react';
import { createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		margin: {
			margin: theme.spacing(1)
		}
	})
);

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ef6c35'
		}
	}
});

const ButtonSubmit: FunctionComponent = () => {
	const classes = useStyles();
	let location = useLocation();

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Button variant="contained" color="primary" className={classes.margin}>
					{location.pathname.slice(1)}
				</Button>
			</ThemeProvider>
		</div>
	);
};

export default ButtonSubmit;
