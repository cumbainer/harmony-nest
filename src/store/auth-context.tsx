import React from "react";

const defaultContextState = {
    checkAuthentication: () => {
        return false;
    },
    isAuthenticated: false,
    displayError: () => {},
    authenticationError: false,
};
const AuthContext = React.createContext(defaultContextState);
export default AuthContext;
