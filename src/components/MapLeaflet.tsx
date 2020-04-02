import React, { FunctionComponent } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as parkData from '../data/marker-parks.json';
import '../style/index.css';

const MapLeaflet: FunctionComponent = () => {
	return (
		<Map center={[ 45.4, -75.7 ]} zoom={12}>
			<TileLayer
				url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
				attribution="&copy; <a href=&quot;https://stadiamaps.com/&quot;>Stadia Maps</a>, &copy; <a href=&quot;https://openmaptiles.org/&quot;>OpenMapTiles</a> &copy; <a href=&quot;http://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
			/>
			{parkData.features.map((park) => (
				<Marker
					key={park.properties.PARK_ID}
					position={[ park.geometry.coordinates[1], park.geometry.coordinates[0] ]}
				>
					<Popup>
						<div>
							<h2>{park.properties.NAME}</h2>
							<p>{park.properties.DESCRIPTIO}</p>
						</div>
					</Popup>
				</Marker>
			))}
		</Map>
	);
};

export default MapLeaflet;
