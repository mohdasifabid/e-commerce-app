import React, { useState, useEffect } from 'react';

const useErrorMsg = () => {
    const [isErrorMsgPresent, setIsErrorMsgPresent]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('error');
        if (token) {
            setIsErrorMsgPresent(true);
            const timeout = setTimeout(() => {
                localStorage.removeItem('error');
                setIsErrorMsgPresent(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, []);

    return isErrorMsgPresent;
};

export default useErrorMsg;