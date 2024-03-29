"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Button } from "./button";
import { Input } from "./input";
import { loginHandler, validateEmail, validatePassword } from "../lib/utils";
import { useData } from "../context";
import { useAuth } from "../lib/useAuth";

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
  useAuth("/login")

  const { store, setData } = useData()
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: () => loginHandler(email, password, (token) => {
      window.localStorage.setItem("authToken", token);
      router.push("/categories");
      setData({ ...store, isAuthenticated: !!token })
    }),
  });
  const handleNavigationToSignUpPage = () => router.push("/create-account");
  useEffect(() => {
    if (mutation.data?.token || mutation.data?.error) {
      setData({
        ...store,
        userInfo: mutation.data?.currentUser || {},
        loginRes: mutation?.data || {},
        isAuthenticated: !!mutation.data?.token || false,
        successMsg: mutation.data?.success || "",
        errorMsg: mutation.data?.error || "",
      });
    }
  }, [mutation.data?.token, mutation.data?.error]);
  return (
    <div className="flex flex-col items-center border-2 border-gray-400 rounded-xl pl-12 pr-12 pb-4 w-576 h-614">
      <p className="text-3xl font-600 mb-4 pt-16">Login</p>
      <p className="text-2xl font-500">Welcome back to ECOMMERCE</p>
      <p className="mb-4 font-400"> The next gen business marketplace</p>
      <div className="flex flex-col gap-10">
        <Input
          placeholder="Please enter email"
          label="Email"
          type="email"
          setter={setEmail}
          validate={validateEmail}
        />
        <Input
          placeholder="Please enter password"
          label="Password"
          type="password"
          setter={setPassword}
          validate={validatePassword}
        />
        <span className="pt-2">
          <Button
            btnName="Login"
            onClick={mutation.mutate}
            isDisabled={!(email && password)}
          />
        </span>
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
