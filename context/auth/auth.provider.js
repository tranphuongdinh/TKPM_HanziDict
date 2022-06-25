import { useReducer } from "react";
import { AuthContext } from "./auth.context";
const isBrowser = typeof window !== "undefined";
const INITIAL_STATE = {
    isAuthenticated: isBrowser && !!localStorage.getItem("access_token"),
    token: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("access_token", action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
            };
        }
        case "LOGOUT": {
            localStorage.removeItem("access_token");
            return {
                ...state,
                token: "",
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

export const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
