import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext(); // preparing the datalayer

// children its basically start from the App component and deeper
export const StateProvider = ({ initialState, reducer, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)} >
		{children}
	</StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
