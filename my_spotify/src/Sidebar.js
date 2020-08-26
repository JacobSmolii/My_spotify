import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from './StateProvider';

function Sidebar() {
	const [{ playlists }, dispatch] = useStateValue();

	return (
		<div className="sidebar">
			<img
				className="sidebar_logo"
				src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White-750x225.png"
				alt=""
			/>
		<SidebarOption Icon={HomeIcon} title="home" />
		<SidebarOption Icon={SearchIcon} title="search" />
		<SidebarOption Icon={LibraryMusicIcon} title="library" />

		<br />
		<strong className="sidebar_title">PLAYLIST</strong>
		<hr />

		{playlists?.items?.map(playlist => (
			<SidebarOption key={playlist.id} title={playlist.name} />

		))}
		</div>
	)
}

export default Sidebar
