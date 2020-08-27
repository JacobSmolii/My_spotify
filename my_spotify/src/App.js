import React, { useEffect } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token
			})

			spotify.setAccessToken(_token); // giving the access token to spotify API
			spotify.getMe().then(user => {
				dispatch({
					type: "SET_USER",
					user
				})
			})

			spotify
				.getUserPlaylists()
				.then(playlists => {
					console.log('app_aplay', playlists)
					dispatch({
						type: "SET_PLAYLIST",
						playlists: playlists,
					})
				})

				spotify
					.getPlaylist('37i9dQZEVXcCOH30KsAzy1') // this is ID from the spotify url account
					.then(response => {
						console.log('app', response)
						dispatch({
							type: "SET_DISCOVER_WEEKLY",
							discover_weekly: response
						})
					})
		}
	}, [])

	return (
		<div className="app">
			{
				token ? (
					<Player spotify={spotify} />
				) : (
					<Login />
				)
			}
		</div>
	);
}

export default App;
