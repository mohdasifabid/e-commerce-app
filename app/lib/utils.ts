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
    } catch (error: any) {
        localStorage.setItem("error", error?.response.data.error);
    }
};

export const handleCategoryClick = (authToken: string | null, router: any) => {
    if (authToken) {
        router.push("/categories");
    } else {
        router.push("/login");
    }
};

export const handleNavigationToSignInPage = (router: any) => router.push("/login");


export const createAccountHandler = async (name: string | "", email: string | "", password: string | "", router: any) => {
    try {
        const res = await axios.post("/api/create-account", {
            name,
            email,
            password,
        });
        if (res.status === 201) {
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("userInfo", JSON.stringify(res.data.newUser));
            localStorage.setItem("success", JSON.stringify(res.data.success));
            router.push("/categories");
        }
    } catch (error: any) {
        localStorage.setItem("error", JSON.stringify(error?.response.data.error));
    }
};