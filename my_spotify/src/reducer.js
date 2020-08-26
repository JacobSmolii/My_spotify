import { StateContext } from "./StateProvider";

export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// remove after finished developing...
	token: "BQAZPQHCjedtKB54d16q3UovpHCUly7bipri0xah-ZVdbaSLq5…KixzjThK1qJ4S3ZqLWjesvwlnk1Vbt_oRxs-MhB5isCyOYCb1",
}

const reducer = (state, action) => {
	// console.log(action);

	// Action -> type, [payload]/whatever you give a name

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
		default:
			return state;
	}
}

export default reducer
