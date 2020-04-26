//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import MapLeaflet from '../containers/MapLeaflet';

const Home: FunctionComponent = () => {
	return (
		<Grid item xs={12}>
			<MapLeaflet />
		</Grid>
	);
};

export default Home;
