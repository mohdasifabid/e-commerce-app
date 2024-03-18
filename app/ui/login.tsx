"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "./button";
import { Input } from "./input";

export const Login = (props: any) => {
  const router = useRouter();
  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");

  const [password, setPassword]: [
    string | number,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState("");

  const endPoint = "/api/login";
  const loginHandler = async () => {
    const res = await axios.post(endPoint, {
      email,
      password,
    });
    if (res.status === 200) {
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("userInfo", JSON.stringify(res.data.currentUser));
      router.push("/categories");
    }
  };

  const handleNavigationToSignUpPage = () => router.push("/create-account");

  return (
    <div className="flex flex-col items-center border-2 border-gray-400 rounded-xl pl-12 pr-12 pb-4 w-576">
      <p className="text-3xl font-600 mb-4 pt-4">Login</p>
      <p className="text-2xl font-500">Welcome back to ECOMMERCE</p>
      <p className="mb-4 font-400"> The next gen business marketplace</p>
      <div className="flex flex-col gap-8">
        <Input
          placeholder="Please enter email"
          label="Email"
          type="email"
          setter={setEmail}
        />
        <Input
          placeholder="Please enter password"
          label="Password"
          type="password"
          setter={setPassword}
        />
        <Button btnName="Login" onClick={loginHandler} />
        <hr />
        <p className="flex justify-center pb-3 gap-3">
          Dont have an Account?{" "}
          <a className="cursor-pointer" onClick={handleNavigationToSignUpPage}>
            SIGN UP
          </a>
        </p>
      </div>
    </div>
  );
};
