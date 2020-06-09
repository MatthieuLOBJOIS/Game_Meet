//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
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

const Footer: FunctionComponent = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.root} item xs={12}>
			Game Meet - 2020 -{' '}
			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthieulobjois/">
				Matthieu Lj
			</a>
		</Grid>
	);
};

export default Footer;
