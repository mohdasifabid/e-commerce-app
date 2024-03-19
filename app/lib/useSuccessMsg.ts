import React, { useState, useEffect } from 'react';

const useSuccessMsg = () => {
    const [isSuccessMsgPresent, setIsSuccessMsgPresent]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('success');
        if (token) {
            setIsSuccessMsgPresent(true);
            const timeout = setTimeout(() => {
                localStorage.removeItem('success');
                setIsSuccessMsgPresent(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, []);

    return isSuccessMsgPresent;
};

export default useSuccessMsg;