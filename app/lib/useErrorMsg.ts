import React, { useState, useEffect } from 'react';

const useErrorMsg = () => {
    const [authToken, setAuthToken]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('error');
        if (token) {
            setAuthToken(true);
            const timeout = setTimeout(() => {
                localStorage.removeItem('error');
                setAuthToken(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, []);

    return authToken;
};

export default useErrorMsg;