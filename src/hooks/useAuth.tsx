import {checkUserAuthentication} from "../util/login-util.ts";
import {memo, useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const UseAuth = () => {
    const navigate = useNavigate();
    const [isAuthenticatedFlag, setIsAuthenticatedFlag] = useState(false);
    const [errorAuthentication, setErrorAuthentication] = useState(false);

    console.log("use auth " + errorAuthentication)

    useEffect( () => {
        const fetchIsAuthenticated = async () => {
            setIsAuthenticatedFlag(await checkUserAuthentication());
        };
        fetchIsAuthenticated();
    }, []);


    const displayError = () => {
        setErrorAuthentication(true);
        navigate("/auth");
    };


    return {
        setErrorOnAuthentication: displayError,
        // checkAuthentication: fetchIsAuthenticated,
        isAuthenticated: isAuthenticatedFlag,
        authError: errorAuthentication
    };
};


export default UseAuth;