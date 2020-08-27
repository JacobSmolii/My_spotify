export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	discover_weekly: null,
	// remove after finished developing...
	// token: "BQAZPQHCjedtKB54d16q3UovpHCUly7bipri0xah-ZVdbaSLq5…KixzjThK1qJ4S3ZqLWjesvwlnk1Vbt_oRxs-MhB5isCyOYCb1",
}

const reducer = (state, action) => {
	switch(action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user
			}
		case "SET_TOKEN":
			return {
				...state,
				token: action.token
			}
		case "SET_PLAYLIST":
			return {
				...state,
				playlists: action.playlists
			}
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly
			}
		default:
			return state;
	}
}

export default reducer;
