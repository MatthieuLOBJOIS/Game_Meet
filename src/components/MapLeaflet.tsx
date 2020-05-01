import React, { FunctionComponent, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../style/index.css';

type Props = {
	snapUsers: any;
	data: Array<Object>;
};

const MapLeaflet: FunctionComponent<Props> = ({ snapUsers, data }) => {
	let sessionUser = JSON.parse(localStorage.getItem('isUser') || '{}');
	useEffect(() => {
		snapUsers();
	}, []);

	return (
		<Map
			center={
				sessionUser.isLogged !== true ? (
					[ 45.4, -75.7 ]
				) : (
					[ sessionUser.sessionData.location.lat, sessionUser.sessionData.location.lng ]
				)
			}
			zoom={12}
		>
			<TileLayer
				url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
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
								{user.games.map(
									(game: { name: string; studio: string; type: string; picture: string }) => {
										return (
											<img
												key={game.name}
												src={game.picture}
												style={{ height: '50px', width: '50px' }}
												alt={`logo du jeu: ${game.name}`}
											/>
										);
									}
								)}
							</div>
						</div>
					</Popup>
				</Marker>
			))}
		</Map>
	);
};

export default MapLeaflet;
