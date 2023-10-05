import  {ReactNode, useEffect, useState} from 'react';
import {checkUserAuthentication} from "../util/login-util.ts";
import AuthContext from "./auth-context.tsx";

type Props = {
    children: ReactNode
}
//todo for now did as it is, futher make via ReactQuery
const AuthContextProvider = ({children}: Props) => {
    const [isAuthenticatedFlag, setIsAuthenticatedFlag] = useState(false);
    const [errorAuthenticationFlag, setErrorAuthenticationFlag] = useState(false);

    useEffect(() => {
        const fetchIsAuthenticated = async () => {
            setIsAuthenticatedFlag(await checkUserAuthentication());
        };
        fetchIsAuthenticated();
    }, []);

    const checkAuth = () => {
        const fetchIsAuthenticated = async () => {
            setIsAuthenticatedFlag(await checkUserAuthentication());
        };
        fetchIsAuthenticated();
        return isAuthenticatedFlag;
    }

    const displayAuthenticationError = () => {
        setErrorAuthenticationFlag(true);
    };

    const authContext = {
        checkAuthentication: checkAuth,
        isAuthenticated: isAuthenticatedFlag,
        displayError: displayAuthenticationError,
        authenticationError: errorAuthenticationFlag
    }
    console.log(isAuthenticatedFlag)

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;