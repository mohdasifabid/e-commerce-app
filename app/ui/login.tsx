import { Button } from "./button";
import { Input } from "./input";

export const Login = (props: any) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-400 rounded-xl pl-12 pr-12 pb-4 w-576">
      <p className="text-4xl font-bold mb-4 pt-4">Login</p>
      <p className="text-xl ">Welcome back to ECOMMERCE</p>
      <p className="mb-4"> The next gen business marketplace</p>
      <div className="flex flex-col gap-8">
        <Input placeholder="Please enter email" label="Email" type="email" />
        <Input
          placeholder="Please enter password"
          label="Password"
          type="password"
        />
        <Button btnName="Login" />
        <hr />
        <p className="flex justify-center pb-3 gap-3">
          Dont have an Account? <a className="cursor-pointer">SIGN UP</a>
        </p>
      </div>
    </div>
  );
};
