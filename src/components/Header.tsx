//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';

//Local imports*
import Menu from './Menu';

const Header: FunctionComponent = () => {
	return (
		<Grid item xs={12}>
			<Menu/>
		</Grid>
	);
};

export default Header;
