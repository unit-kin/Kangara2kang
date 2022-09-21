import React,{ createContext, useContext, useReducer} from "react";


/* Prepares the datalayer */
export const StateContext = createContext();

/* Wrap or app and provide the Datalayer */
export const StateProvider =({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

/* Pull info from the data layer */
export const useStateValue = () => useContext(StateContext);
