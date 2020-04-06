//Imports of dependencies
import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import MapLeaflet from '../components/MapLeaflet';

const Home: FunctionComponent = () => {
	// const login = false;
	return (
		<Grid item xs={12}>
			<MapLeaflet />
		</Grid>
	);
};

export default Home;
