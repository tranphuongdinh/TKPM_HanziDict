import React, { useReducer } from "react";
import { AuthContext } from "./auth.context";
const isBrowser = typeof window !== "undefined";
const INITIAL_STATE = {
    isAuthenticated:
        isBrowser &&
        !!localStorage.getItem("access_token") &&
        !!localStorage.getItem("userInfo"),
    user: isBrowser && JSON.parse(localStorage.getItem("userInfo") || "null"),
};

function reducer(state: any, action: any) {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("access_token", action.payload.accessToken);
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        }
        case "LOGOUT": {
            localStorage.removeItem("access_token");
            localStorage.removeItem("userInfo");
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        }
        case "UPDATE_USER": {
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
            };
        }
        default:
            return state;
    }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
    const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
