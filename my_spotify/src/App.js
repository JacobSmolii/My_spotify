import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {

	const [token, setToken] = useState(null);
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			setToken(_token);


			spotify.setAccessToken(_token); // giving the access token to spotify API

			spotify.getMe().then(user => {
				// console.log('person', user);
			dispatch({
				type: "SET_USER",
				user
			})

			})
		}
		console.log('I have a token >>>>', token)
	}, [])

	console.log("uer => ", user);

	return (
		<div className="app">
			{
				token ? (
					<Player />
				) : (
					<Login />
				)
			}
		</div>
	);
}

export default App;
