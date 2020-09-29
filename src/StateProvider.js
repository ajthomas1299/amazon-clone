import React, { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer.
export const StateContext = createContext();

// Wrap our app. and provide the DataLayer to every component in our app.
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the DataLayer.
export const useStateValue = () => useContext(StateContext);