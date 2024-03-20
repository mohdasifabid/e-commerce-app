"use client";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

import { DiscountBar } from "./discountBar";
import ErrorAlert from "../alerts/errorAlert";
import useSuccessMsg from "../lib/useSuccessMsg";
import SuccessAlert from "../alerts/successAlert";
import { handleCategoryClick } from "../lib/utils";
import { useData } from "../context";


export const Navbar = (props: any) => {
  const router = useRouter();
  const { store, setData } = useData();
  const { isAuthenticated, loginRes, successMsg, errorMsg } = store;
  const isSuccessAlertAlive = useSuccessMsg();
  const [isErrorAlertActive, setIsErrorAlertActive] = useState(false);


  useEffect(() => {
    if (errorMsg) {
      setIsErrorAlertActive(true);
      const timeout = setTimeout(() => {
        setIsErrorAlertActive(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [errorMsg]);
  
  return (
    <nav className="fixed top-0 left-0 bg-white z-10 w-full h-100">
      {isSuccessAlertAlive && <SuccessAlert message={successMsg} />}
      {isErrorAlertActive && <ErrorAlert message={errorMsg} />}
      <div className="flex flex-col border-2 w-full gap-4 pl-7 pr-7 ">
        <div className="flex justify-end pt-2">
          <div className="flex gap-7 ">
            <p>Help</p>
            <p>Orders & Returns </p>
            {isAuthenticated && <p>Hi, {loginRes?.newUser?.name}</p>}
            {isAuthenticated ? <button onClick={() => {
               window.localStorage.clear();
              setData({ successMsg: "Logged out successfully", isAuthenticated: false })
              router.push("/login")
            }}>Logout</button>
              : <button onClick={() => router.push("/login")}>Login</button>}
          </div>
        </div>
        <div className="flex justify-between pb-2">
          <p className="text-2xl font-bold leading-10 text-left font-inter">
            E-COMMERCE
          </p>
          <div className="flex gap-6 text-1xl font-bold">
            <button
              className="font-inter text-base font-semibold leading-5 text-left"
              onClick={() => handleCategoryClick(isAuthenticated, router)}
            >
              Categories
            </button>
            <button className="font-inter text-base font-semibold leading-5 text-left">
              Sale
            </button>
            <button className="font-inter text-base font-semibold leading-5 text-left">
              Clearance
            </button>
            <button className="font-inter text-base font-semibold leading-5 text-left">
              New Stock
            </button>
            <button className="font-inter text-base font-semibold leading-5 text-left">
              Trending
            </button>
          </div>
          <div className="flex gap-4">
            <button>
              <IoIosSearch className="text-xl " />
            </button>
            <button>
              <BsCart2 className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <DiscountBar />
    </nav>
  );
};
