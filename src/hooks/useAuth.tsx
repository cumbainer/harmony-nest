import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const fetchTokens = async () => {
            const baseTokenUrl = "http://localhost:4040/token";
            try {
                const response = await axios.get(baseTokenUrl, {
                    withCredentials: true,
                });
                setAccessToken(response.data.accessToken);
            } catch (error) {
                throw new Error("Error fetching token: "+ error);
            }
        };
        fetchTokens();
    }, []);

    // Return the access token when it's available
    return accessToken;
};

export default useAuth;
