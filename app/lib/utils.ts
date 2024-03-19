import axios from "axios";

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

export const loginHandler = async (email: string | "", password: string | "", router: any) => {
    const endPoint = "/api/login";
    try {
        const res = await axios.post(endPoint, {
            email,
            password,
        });

        if (res.status === 200 || 201) {
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("userInfo", JSON.stringify(res.data.currentUser));
            localStorage.setItem("success", res.data.success);
            router.push("/categories");
        }
    } catch (error) {
        localStorage.setItem("error", error?.response.data.error);
    }
};