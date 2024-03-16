import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const SignUp = (props: any) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-400 rounded-xl pl-12 pr-12 pb-4 w-576">
      <p className="text-4xl font-bold pb-6 pt-8">Create your account</p>
      <div className="flex flex-col gap-8">
        <Input placeholder="Please enter name" label="Name" type="text" />

        <Input placeholder="Please enter email" label="Email" type="email" />
        <Input
          placeholder="Please enter password"
          label="Password"
          type="password"
        />
        <Button btnName="CREATE ACCOUNT" />
        <hr />
        <p className="flex justify-center pb-3 gap-3">
          Have an Account? <a className="cursor-pointer">Login</a>
        </p>
      </div>
    </div>
  );
};
