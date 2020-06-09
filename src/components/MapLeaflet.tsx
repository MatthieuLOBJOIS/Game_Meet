import React, { FunctionComponent, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../style/index.css';
import ButtonAddFriends from '../containers/ButtonAddFriends';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconSize: [ 25, 41 ],
	iconAnchor: [ 10, 41 ],
	popupAnchor: [ 2, -40 ],
	iconUrl: icon,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

type Props = {
	snapUsers: any;
	data: Array<Object> | any;
	listFriends: any;
};

const MapLeaflet: FunctionComponent<Props> = ({ snapUsers, data, listFriends }) => {
	let sessionUser = JSON.parse(localStorage.getItem('isUser') || '{}');
	let sessionLogin = JSON.parse(localStorage.getItem('isLogged') || '{}');

	useEffect(() => {
		snapUsers();
	}, []);

	return (
		<Map
			center={
				sessionLogin.isLogged !== true ? (
					[ 45.4, -75.7 ]
				) : (
					[ sessionUser.sessionData.location.lat, sessionUser.sessionData.location.lng ]
				)
			}
			zoom={12}
		>
			<TileLayer
				//url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
				url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
				attribution="&copy; <a href=&quot;https://stadiamaps.com/&quot;>Stadia Maps</a>, &copy; <a href=&quot;https://openmaptiles.org/&quot;>OpenMapTiles</a> &copy; <a href=&quot;http://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
			/>
			{data.map((user: any) => (
				<Marker key={user.pseudo} position={[ user.location.lat, user.location.lng ]}>
					<Popup>
						<div>
							<h2>{user.pseudo}</h2>
							<p>{user.city}</p>
							<p>{user.address}</p>
							<div>
								{user.games.map((game: any, index: any) => {
									return (
										<img
											key={index}
											src={game.picture}
											style={{ height: '50px', width: '50px' }}
											alt={`logo du jeu: ${game.name}`}
										/>
									);
								})}
							</div>
							{sessionLogin.isLogged === true && sessionUser.sessionData.pseudo !== user.pseudo ? (
								<ButtonAddFriends
									user={user}
									sessionData={sessionUser.sessionData}
									listFriends={listFriends}
								/>
							) : (
								''
							)}
						</div>
					</Popup>
				</Marker>
			))}
		</Map>
	);
};

export default MapLeaflet;
