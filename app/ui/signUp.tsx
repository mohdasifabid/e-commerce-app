"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignUp = (props: any) => {
  const router = useRouter();
  const [name, setName]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [password, setPassword]: [
    string | number,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState("");

  const handleNavigationToSignInPage = () => router.push("/signIn");

  return (
    <div className="flex flex-col items-center border-2 border-gray-400 rounded-xl pl-12 pr-12 pb-4 w-576">
      <p className="text-4xl font-bold pb-6 pt-8">Create your account</p>
      <div className="flex flex-col gap-8">
        <Input
          placeholder="Please enter name"
          label="Name"
          type="text"
          setter={setName}
        />

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
        <Button btnName="CREATE ACCOUNT" />
        <hr />
        <p className="flex justify-center pb-3 gap-3">
          Have an Account?{" "}
          <a className="cursor-pointer" onClick={handleNavigationToSignInPage}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
