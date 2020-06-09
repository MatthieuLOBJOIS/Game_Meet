//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom';
import { themeButton } from '../../../../../services/createTheme';
import useStyles from './style';

const ButtonSubmit: FunctionComponent = () => {
	const classes = useStyles();
	let location = useLocation();
	//console.log(location);
	return (
		<div>
			<ThemeProvider theme={themeButton}>
				<Button type="submit" variant="contained" color="primary" className={classes.margin}>
					{location.search === '?sort=chat' ? 'Envoyer' : location.pathname.slice(1)}
				</Button>
			</ThemeProvider>
		</div>
	);
};

export default ButtonSubmit;
