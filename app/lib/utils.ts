export const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
    }
};

export const validatePassword = (value: string) => {
    if (value.length < 5) {
        return "Password must be at least 5 characters long";
    }
};

export const validateName = (value: string) => {
    if (value.length < 5) {
        return "Name must be at least 5 characters long";
    }
};