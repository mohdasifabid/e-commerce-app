import React, { useState, useEffect } from 'react';

const useAuth = () => {
    const [authToken, setAuthToken]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setAuthToken(true);
        }
    }, []);

    return authToken;
};

export default useAuth;