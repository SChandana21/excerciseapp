import React, {createContext, useContext, useReducer} from "react";

export const Usercontext = createContext();

export const Usercontextprovider = ({reducer, initialstate, children}) => (
        <Usercontext.Provider value={useReducer(reducer, initialstate)}>
            {children}
        </Usercontext.Provider>
);

export const useStatevalue = () => 
    useContext(Usercontext);
