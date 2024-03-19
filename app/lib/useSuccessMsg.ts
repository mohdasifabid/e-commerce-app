import React, { useState, useEffect } from 'react';

const useSuccessMsg = () => {
    const [authToken, setAuthToken]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('success');
        if (token) {
            setAuthToken(true);
            const timeout = setTimeout(() => {
                localStorage.removeItem('success');
                setAuthToken(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, []);

    return authToken;
};

export default useSuccessMsg;