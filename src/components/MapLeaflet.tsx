import React, { FunctionComponent, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../style/index.css';

type Props = {
	snapUsers: any;
	data: any;
};

const MapLeaflet: FunctionComponent<Props> = ({ snapUsers, data }) => {
	useEffect(() => {
		snapUsers();
	}, []);

	return (
		<Map center={[ 45.4, -75.7 ]} zoom={12}>
			<TileLayer
				url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
				attribution="&copy; <a href=&quot;https://stadiamaps.com/&quot;>Stadia Maps</a>, &copy; <a href=&quot;https://openmaptiles.org/&quot;>OpenMapTiles</a> &copy; <a href=&quot;http://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
			/>
			{data.map((user: any) => (
				<Marker key={user.pseudo} position={[ user.location.lat, user.location.lng ]}>
					<Popup>
						<div>
							<h2>{user.pseudo}</h2>
							<p>{user.address}</p>
						</div>
					</Popup>
				</Marker>
			))}
		</Map>
	);
};

export default MapLeaflet;
